Favicon generation instructions

Place your source logo (the one you uploaded in the repo discussion) at:

  public/source_logo.png

Recommended: a square PNG at 512x512 or larger, with your preferred white background.

Then run:

  npm install sharp png-to-ico
  npm run generate:favicons

Files created by the script:

  - public/favicon.ico         (multi-size ICO: 16,32,48,64)
  - public/favicon-32x32.png
  - public/apple-touch-icon.png (180x180)

If you want me to add the uploaded logo (`source_logo.png`) and run the script now, reply: "Yes, add and generate" and I'll do it for you.