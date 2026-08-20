// Test script to verify cleanAndNormalizeImageUrl behaves as expected
import { cleanAndNormalizeImageUrl } from "../src/utils/image";

const testCases = [
  // 1. WordPress Suffix
  {
    input: "https://example.com/wp-content/uploads/2023/04/image-150x150.jpg",
    expected: "https://example.com/wp-content/uploads/2023/04/image.jpg"
  },
  {
    input: "https://example.com/wp-content/uploads/2023/04/photo-1024x768.png?somequery=1",
    expected: "https://example.com/wp-content/uploads/2023/04/photo.png?somequery=1"
  },
  // 2. Shopify Suffix
  {
    input: "https://cdn.shopify.com/s/files/1/0000/0000/files/product_100x100.jpg",
    expected: "https://cdn.shopify.com/s/files/1/0000/0000/files/product.jpg"
  },
  {
    input: "https://cdn.shopify.com/s/files/1/0000/0000/files/bag_medium_crop_center.png?v=123",
    expected: "https://cdn.shopify.com/s/files/1/0000/0000/files/bag.png?v=123"
  },
  // 3. Unsplash Resizing Query params
  {
    input: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=150&h=150&q=80",
    expected: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&q=80"
  },
  // 4. Cloudinary Path transformations
  {
    input: "https://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill/sample.jpg",
    expected: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
  },
  {
    input: "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_limit/v1571216503/sample.jpg",
    expected: "https://res.cloudinary.com/demo/image/upload/v1571216503/sample.jpg"
  },
  // 5. Google User Content / Blogspot
  {
    input: "https://lh3.googleusercontent.com/a/AATXAJx2s0w3-c=w150-h150-c",
    expected: "https://lh3.googleusercontent.com/a/AATXAJx2s0w3-c=s0"
  },
  {
    input: "https://blogger.googleusercontent.com/img/b/U2hvd2Nhc2U=/s150-c/photo.jpg",
    expected: "https://blogger.googleusercontent.com/img/b/U2hvd2Nhc2U=/s0/photo.jpg"
  },
  // 6. Gravatar
  {
    input: "https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=80",
    expected: "https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=2048"
  },
  // 7. Relative Path WP
  {
    input: "/assets/image-300x200.png",
    expected: "/assets/image.png"
  }
];

let failedCount = 0;
for (const tc of testCases) {
  const result = cleanAndNormalizeImageUrl(tc.input);
  if (result !== tc.expected) {
    console.error(`FAIL: Input: ${tc.input}\n      Expected: ${tc.expected}\n      Got:      ${result}`);
    failedCount++;
  } else {
    console.log(`PASS: ${tc.input} => ${result}`);
  }
}

if (failedCount === 0) {
  console.log("\nALL TESTS PASSED SUCCESSFULLY! ✅");
  process.exit(0);
} else {
  console.error(`\n${failedCount} TESTS FAILED. ❌`);
  process.exit(1);
}
