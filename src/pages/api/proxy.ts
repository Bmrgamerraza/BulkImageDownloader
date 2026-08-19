import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const imageUrl = url.searchParams.get("url");

  if (!imageUrl) {
    return new Response(JSON.stringify({ error: "Image URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const targetUrl = new URL(imageUrl);
    
    // Fetch image from source
    const response = await fetch(targetUrl.href, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch image (Status ${response.status})` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const contentType = response.headers.get("Content-Type") || "application/octet-stream";
    
    // Verify it is actually an image or binary file
    if (!contentType.startsWith("image/") && contentType !== "application/octet-stream") {
      return new Response(
        JSON.stringify({ error: "Target URL does not point to a valid image" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.arrayBuffer();

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "public, max-age=86400", // cache for 1 day
      },
    });
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
