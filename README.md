# Chart Occurrences

Simple bar chart that plots the number of occurrences of unique words in a phrase that is either typed in by the user or auto generated.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Key Architectural Decisions

This project is built using React + Typescript for reactivity and optimal user experience. Here are some packages and libraries I used to build this project:

- [D3](https://d3js.org/): Charting library
- [Jotai](https://jotai.org/): Lightweight state management system to work with data.
- [useForm](https://react-hook-form.com/docs/useform): Simple hook for managing form data.
- [tailwindCSS](https://tailwindcss.com/) + [flowbite](https://flowbite-react.com/) + [twMerge](https://www.npmjs.com/package/tailwind-merge): UI Components & Styling.

## Relevant Code Snippets

- [drawBarChart](./app/charts/barChart.ts): JS script that draws a barChart based on strictly defined inputs.
- [BarChart](./app/components/BarChart.tsx): React component that properly draws bar chart when phrase data is submitted.
- [PhraseBox](./app/components/PhraseBox.tsx): React component that captures user's submission of a phrase.
- [formatPhrase](./app/utils/index.ts): Utility function that creates a map of occurences to unique words in a phrase.
- [store](./app/store/index.ts): Lightweight & contextual state that is responsible for reading and writing data to render charts.

## Running Locally

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
