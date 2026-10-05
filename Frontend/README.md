This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form email setup

The contact form uses the Express API in `../Backend` to send a confirmation to
the sender and a notification to `hanzlashahzad41@gmail.com`.

1. Ensure `Backend/.env` contains the settings shown in `Backend/.env.example`.
2. Set `SMTP_PASS` to a Google App Password for the `SMTP_USER` Gmail account.
   Do not use or expose the Gmail account password. SMTP credentials stay on the
   backend and must never be added to the frontend.
3. Start the API from `Backend` with `npm run dev`.
4. Optionally set `NEXT_PUBLIC_API_URL` in `Frontend/.env.local` if the API is
   not running at `http://localhost:2000`, then start the frontend with
   `npm run dev` from `Frontend`.

Set `FRONTEND_ORIGIN` to the deployed frontend's origin when deploying the API.
The frontend and backend must both be deployed; a browser cannot send these
emails directly.
