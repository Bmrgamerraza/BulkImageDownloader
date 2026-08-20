/**
 * Utility function to clean and normalize image URLs to get the highest resolution possible.
 * Works on both client-side and server-side.
 */
export function cleanAndNormalizeImageUrl(urlStr: string): string {
  if (!urlStr) return urlStr;
  
  // Clean basic whitespace or wrapping quotes
  urlStr = urlStr.trim().replace(/^["']|["']$/g, "");

  try {
    // Check if it looks like a valid URL or at least has a protocol
    const url = new URL(urlStr);
    const hostname = url.hostname.toLowerCase();
    const pathname = url.pathname.toLowerCase();

    // 1. WordPress image size suffixes (e.g., -150x150.jpg, -1024x768.png)
    // Matches a dash followed by numbers, 'x', and numbers right before the extension.
    const wpPattern = /-\d+x\d+(?=\.[a-z0-9]+$)/i;
    if (wpPattern.test(url.pathname)) {
      url.pathname = url.pathname.replace(wpPattern, "");
    }

    // 2. Shopify image size suffixes (e.g., _100x100.jpg, _medium.jpg, _2048x2048_crop_center.jpg)
    const shopifyPattern = /_(?:pico|icon|thumb|small|compact|medium|large|grande|master|(?:\d+x\d*)|(?:x\d+))(?:_crop_[a-z]+)?(?=\.[a-z0-9]+$)/i;
    if (shopifyPattern.test(url.pathname) && (hostname.includes("cdn.shopify.com") || hostname.includes("shopifycdn.com"))) {
      url.pathname = url.pathname.replace(shopifyPattern, "");
    }

    // 3. Cloudinary path-based transformations
    // Matches /image/upload/<transformations>/v<version>/... or without version
    // Typically contains flags like w_, h_, c_, q_, f_, etc.
    const cloudinaryPattern = /(\/image\/upload\/)[^\/]*(?:w_|h_|c_|q_|f_)[^\/]*\//i;
    if (cloudinaryPattern.test(url.pathname) && hostname.includes("cloudinary.com")) {
      url.pathname = url.pathname.replace(cloudinaryPattern, "$1");
    }

    // 4. Google User Content / Blogspot / Google Photos
    // Path-based size parameters like /s150-c/ or /s72-c/
    const googlePathPattern = /\/s\d+(?:-[a-z0-9-]+)?\//i;
    const isGoogleHost = hostname.includes("googleusercontent.com") || hostname.includes("blogspot.com") || hostname.includes("ggpht.com");
    if (isGoogleHost && googlePathPattern.test(url.pathname)) {
      url.pathname = url.pathname.replace(googlePathPattern, "/s0/"); // s0 is the original size
    }
    // Query-based or path-suffix-based size parameters like =w150-h150-c or =s150
    const googleQueryPattern = /=s\d+(?:-[a-z0-9-]+)?$/i;
    const googleWidthHeightPattern = /=w\d+-h\d+(?:-[a-z0-9-]+)?$/i;
    if (isGoogleHost) {
      if (googleQueryPattern.test(url.pathname)) {
        url.pathname = url.pathname.replace(googleQueryPattern, "=s0");
      } else if (googleWidthHeightPattern.test(url.pathname)) {
        url.pathname = url.pathname.replace(googleWidthHeightPattern, "=s0");
      } else if (googleQueryPattern.test(url.search)) {
        url.search = url.search.replace(googleQueryPattern, "=s0");
      } else if (googleWidthHeightPattern.test(url.search)) {
        url.search = url.search.replace(googleWidthHeightPattern, "=s0");
      }
    }

    // 5. Gravatar profile sizes
    if (hostname.includes("gravatar.com") && url.searchParams.has("s")) {
      url.searchParams.set("s", "2048"); // set to maximum size
    }

    // 6. Generic CDN query parameter cleanup (Unsplash, Pexels, Imgix, Fastly, Cloudinary)
    // Remove query parameters that resize/crop the image.
    const resizeParams = ["w", "width", "h", "height", "max-w", "max-h", "dpr", "crop", "fit", "size"];
    const responsiveCDNs = [
      "unsplash.com",
      "imgix.net",
      "pexels.com",
      "cloudinary.com",
      "fastly.net",
      "wp.com", // Jetpack Photon CDN (e.g. i0.wp.com, i1.wp.com)
      "shopify.com"
    ];

    const isResponsiveCDN = responsiveCDNs.some(domain => hostname.includes(domain));
    if (isResponsiveCDN) {
      for (const param of resizeParams) {
        url.searchParams.delete(param);
      }
    }

    return url.href;
  } catch (_) {
    // If it's not a full URL (e.g. relative path), try a relative regex cleanup for WordPress / Shopify
    try {
      let cleaned = urlStr;
      const wpPattern = /-\d+x\d+(?=\.[a-z0-9]+$)/i;
      cleaned = cleaned.replace(wpPattern, "");
      
      const shopifyPattern = /_(?:pico|icon|thumb|small|compact|medium|large|grande|master|(?:\d+x\d*)|(?:x\d+))(?:_crop_[a-z]+)?(?=\.[a-z0-9]+$)/i;
      cleaned = cleaned.replace(shopifyPattern, "");
      
      return cleaned;
    } catch (_) {
      return urlStr;
    }
  }
}
