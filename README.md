# Realtime Chat

A real-time chat application built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Upstash Realtime](https://upstash.com/docs/redis/features/realtimemessaging). 

## Features

- **Room-based chat**: Create ephemeral chat rooms with unique IDs
- **Real-time messaging**: Instant message delivery powered by Upstash Realtime
- **Auto-expiring rooms**: Chat rooms automatically expire and clean up after a set time
- **Username support**: Set your display name when joining a room
- **Persistent storage**: Messages stored in Redis via Upstash
- **Modern stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: Next.js, React, React Query, Tailwind CSS
- **Backend**: Next.js API Routes, Elysia (lightweight web framework)
- **Real-time**: Upstash Realtime
- **Storage**: Upstash Redis
- **Utilities**: nanoid, date-fns, Zod

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
