# Moviefinder App

![Moviefinder App Screenshot](https://th.bing.com/th/id/OIP.rXCz8RXHdZ1IF3ibBoA9kAHaEK?pid=ImgDet&rs=1)

Moviefinder is a typical Next.js application built using Redux Toolkit, Material UI, Next.js, and TypeScript. This app allows users to browse a list of the most popular movies and view detailed information about each movie when clicked. Before running the app, make sure to configure the environment variable `NEXT_PUBLIC_THEMOMOVIE_API_TOKEN` and set it to your access token, which can be obtained from [here](https://www.themoviedb.org/settings/api).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)


## Getting Started

### Prerequisites

To run this application, you need to have Node.js and yarn (Node Package Manager) installed on your machine. You can download Node.js from the official website: [https://nodejs.org](https://nodejs.org).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Mandy9943/movie-finder.git
cd movie-finder
```

2. Install the required dependencies:

```bash
yarn install
```

### Configuration

Before running the application, you need to obtain an access token from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api). Follow the steps below to configure the app with your access token:

1. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) and create an account or log in if you already have one.
2. Once logged in, navigate to the "API" section, and under "API Key (v3 auth)," click on the "Create" button to generate a new API key.
3. Copy the generated API key.

### Running the App

To start the development server and run the app, use the following command:

```bash
yarn run dev
```

The app should now be accessible at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- `yarn run dev`: Starts the development server.
- `yarn run build`: Builds the production-ready app for deployment.
- `yarn start`: Starts the production server to serve the built app.
- `yarn run lint`: Runs ESLint to lint your code.
- `yarn run post-update`: This script is for CodeSandbox preview only and triggers a package update.

## Dependencies

The app relies on the following dependencies:

- `@emotion/cache`: ^11.11.0
- `@emotion/react`: ^11.11.1
- `@emotion/server`: ^11.11.0
- `@emotion/styled`: ^11.11.0
- `@mui/icons-material`: ^5.14.1
- `@mui/material`: ^5.14.2
- `@reduxjs/toolkit`: ^1.9.5
- `clsx`: ^2.0.0
- `next`: ^13.4.12
- `query-string`: ^8.1.0
- `react`: ^18.2.0
- `react-country-flag`: ^3.1.0
- `react-dom`: ^18.2.0
- `react-redux`: ^8.1.1

## Dev Dependencies

The following dev dependencies are used for development purposes:

- `@types/node`: ^20.4.5
- `@types/react`: ^18.2.17
- `eslint`: ^8.46.0
- `eslint-config-next`: ^13.4.12
- `typescript`: ^5.1.6


---

Thank you for using Moviefinder app! If you have any questions or need further assistance, please don't hesitate to contact us. Happy movie browsing! 🎬🍿