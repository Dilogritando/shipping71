# 71 Lbs - Company website redesign, March 2022

This is the front-end repository for the new redesign with features and graphics as approved by the executive team on February 2022.

To see the approved mock-ups, you can check the [Figma](https://www.figma.com/file/sYMX24jwkYYIIe3zTdgcAa/71lbs-UI?node-id=206%3A210).

Edit: NEW approved mock-ups as of April 4, 2022, you can check the [Figma](https://www.figma.com/file/sYMX24jwkYYIIe3zTdgcAa/71lbs-UI?node-id=206%3A2100).

✅It includes homepage, product/services pages, etc.

❌It does not include (yet) the internal dashboard-frontEnd.

❌If you are looking for the e-mail templates, custom landings, or blog posts please refer to the marketing team and their access to [Hubspot](https://app.hubspot.com/website/5470644/blog/posts)

## Requirements

- [Node.js](https://nodejs.org/): v6.13.2
- [npx](https://www.npmjs.com/package/npx): v8.1.2
- [npm](https://github.com/npm/cli): v8.1.2
- [Sass](https://sass-lang.com/install): v8.1.2

## This site uses React and Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js](https://nextjs.org/): v12.1.0
- [React.js](https://reactjs.org/): v17.0.2

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependencies like Webpack or Babel and with automatic routing and without the constraints of projects like Create React App, including the possibilities of better SEO practices and Static HTML Exports.

## Getting Started

To get started, just clone the repository, install the dependencies and run the developer server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The page will reload when you make changes.
You may also see any lint errors in the console.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:

```bash
npm install
npm run build
npm start
```

You should run `npm run build` again any time you make changes to the site.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Information about installed packages and dependencies

|:-----------------------:|:-------------------------: |
| [React-Player](https://www.npmjs.com/package/react-player) v.2.9.0 |For videos such as Home hero video |
| [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel) v.3.2.23 | For sliders such as the home "Our services" slider and "Testimonial" slider|

## Other information about NextJS

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The app is currently deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. This repository can be seen live in [This test site](https://test71lbs.vercel.app/)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
