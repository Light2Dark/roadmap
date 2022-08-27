Roadmap is inspired by roadmap.sh to create a modularized learning platform where educators and learners can learn better.

## Feature Set
- Roadmap maker for users to create their own roadmap
- Community roadmaps for users to browse community-made roadmaps
- Group roadmaps for class-based roadmaps shared among all members of the class

## Design Choices
- Next.js: Server side rendering is needed for certain pages and Next.js is the best for dynamic rendering using React and yes, Typescript.
- Tailwind: Easy styling
- Planetscale: Database that's scalable and branching features to prevent blocking changes
- GraphQL: Type safety from end-to-end plus declarative fetching for performance
- Prisma: Bridges the backend and frontend
- Docker: Containerized so that project is scalable accross many instances and can be deployed using various methods (Serverless, Cloud Run, etc.)
- Vitest: Unit testing for critical components
- Playwright: E2E testing to ensure anything pushed to deployment will run safely, no breaking changes

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

