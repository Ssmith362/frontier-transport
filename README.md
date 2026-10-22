# Frontier Transport website

Next.js App Router reproduction of the public Frontier Transport homepage and the visible Join our team form at ftacquisition.com.

## Run locally

```sh
npm install
npm run dev
```

The image paths currently point to the source site's WordPress staging media host. Copy the original image assets into `public/` and replace those URLs before production so the migrated site does not depend on the WordPress host. The public `transport-with-us` page was parked when inspected, so its old form has not been recreated. The Join our team form is a visual recreation only and needs a submission destination before it can accept applications.

## Deploy

Import this project directory as its own Git repository in Vercel. Vercel detects Next.js and uses its standard build settings.
