import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return new Response(JSON.stringify({ error: "URL is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Basic URL validation
    let targetUrl: URL;
    try {
      targetUrl = new URL(url);
    } catch (_) {
      return new Response(JSON.stringify({ error: "Invalid URL format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch the target webpage with a browser-like User-Agent to prevent bot-blocking
    const response = await fetch(targetUrl.href, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch webpage (Status ${response.status})` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const html = await response.text();
    const imageUrls = new Set<string>();

    // 1. Extract <img> tag src attributes
    // Matches: <img ... src="url" ...> or <img ... src='url' ...>
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      if (match[1]) imageUrls.add(match[1].trim());
    }

    // 2. Extract srcset attributes from <img> and <source> tags
    const srcsetRegex = /srcset=["']([^"']+)["']/gi;
    while ((match = srcsetRegex.exec(html)) !== null) {
      if (match[1]) {
        // srcset format is "url 1x, url-2 2x" - split by comma and extract url
        const candidates = match[1].split(",");
        for (const candidate of candidates) {
          const parts = candidate.trim().split(/\s+/);
          if (parts[0]) imageUrls.add(parts[0].trim());
        }
      }
    }

    // 3. Extract CSS background-image: url(...) in HTML
    const bgUrlRegex = /url\(['"]?([^'")\s]+)['"]?\)/gi;
    while ((match = bgUrlRegex.exec(html)) !== null) {
      if (match[1]) imageUrls.add(match[1].trim());
    }

    // 4. Extract links pointing directly to images
    // Matches: <a ... href="url.jpg" ...>
    const linkRegex = /<a[^>]+href=["']([^"']+\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|avif)(?:\?[^"']+)?)["']/gi;
    while ((match = linkRegex.exec(html)) !== null) {
      if (match[1]) imageUrls.add(match[1].trim());
    }

    // Resolve relative URLs to absolute URLs
    const resolvedUrls = new Set<string>();
    for (const src of imageUrls) {
      try {
        // Skip base64 data URLs
        if (src.startsWith("data:")) continue;
        
        const absoluteUrl = new URL(src, targetUrl.href).href;
        resolvedUrls.add(absoluteUrl);
      } catch (err) {
        // Ignore resolution errors for invalid links
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        images: Array.from(resolvedUrls),
        originalUrl: targetUrl.href
      }), 
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
