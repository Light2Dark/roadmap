Roadmap is inspired by roadmap.sh to create a modularized learning platform where educators and learners can learn better.

## Feature Set
- Roadmap maker for users to create their own roadmap
- Community roadmaps for users to browse community-made roadmaps
- Interactive roadmaps for modularized learning all in one place!

## Design Choices
- Next.js: Server side rendering is needed for certain pages and Next.js is the best for dynamic rendering using React and yes, Typescript.
- Tailwind: Easy styling
- Planetscale: Database that's scalable and branching features to prevent blocking changes
- GraphQL: Type safety from end-to-end plus declarative fetching for performance
- Prisma: Bridges the backend and frontend
- Vitest: Unit testing for critical components (NOT YET / MAYBE)
- Playwright: E2E testing to ensure anything pushed to deployment will run safely, no breaking changes (NOT YET)

## Learning Resources
[One Week GraphQL](https://oneweekgraphql.com/), a fullstack GraphQL course by [Nader Dabit](https://twitter.com/dabit3) and [Lee Robinson](https://twitter.com/leerob) is a great resource to learn GraphQL and Prisma.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To start the project,

```bash
 git clone URL # clone this repo
 cd roadmap # move into the folder
 
 # install the dependencies
 npm install 
 #OR 
 yarn
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Contribution

This is a pretty early concept so I'm sorry that the requests are vague. Thanks for seeing this tho! :D



