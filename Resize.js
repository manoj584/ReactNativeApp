const sharp = require("sharp");

sharp("C:/Projects/LearnReactNative/assets/logo.png")
  .resize(1080, 1080)
  .toFile("C:/Projects/LearnReactNative/assets/AppIcon.png", (err, info) => {
    if (err) {
      console.error("Error resizing image:", err);
    } else {
      console.log("Image resized successfully:", info);
    }
  });
