# Personal Resume/Portfolio Website

This is the source code for my personal resume/portfolio website, built using React, styled with HTML and CSS, animated with Framer Motion, and hosted on Cloudflare Pages. The site can be accessed at [mrpuppin.ca](https://mrpuppin.ca).

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Overview
This is a fully responsive, modern resume/portfolio website showcasing my professional experience, skills, and projects (to come). The website was created to give a brief yet detailed overview of my qualifications, with smooth animations and intuitive navigation.

## Features
- **Responsive Design**: Fully responsive and works across all devices (mobile, tablet, desktop).
- **Smooth Animations**: Utilizes Framer Motion to add interactive and smooth animations to different sections of the website.
- **Navigation**: The website uses react-router-dom for multi-page navigation within the application.
- **Fast Performance**: Built using Vite for optimized builds and fast development environment.

## Technologies Used
- **React**: Frontend JavaScript library for building the user interface.
- **Vite**: Fast build tool and development server.
- **HTML5 & CSS3**: For structuring and styling the website.
- **JavaScript**: Core language used for scripting.
- **React Router DOM**: For client-side routing between different sections of the website.
- **Framer Motion**: For adding animations and transitions.
- **Cloudflare Pages**: Hosting platform used for the live website.

## Installation

To run the project locally, follow these steps:

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser and go to http://localhost:5173 (or whatever URL vite spits out).

## Development

While developing, you can use the following commands:

- Start development server: `npm run dev`

    This starts the local server and allows for hot changes to be made to the code.
  
- Build for production: `npm run build`
  
    This creates the build for deployment in the `dist` folder.
  
- Preview production build: `npm run preview`
  
    This previews the production build useful for prior to deployment final checks.

## Deployment

The website is hosted on Cloudflare Pages using the following build settings:

> Build command: `npm run build`

> Build output directory: `/dist`

> Root directory: `/`

> Environment variables: `none`

After pushing to the main branch, Cloudflare Pages will automatically deploy the latest build.

To deploy in the same way:

1. Update the `package.json` homepage attribute to: `"homepage" : "https://{cloudflare page name}.pages.dev"`
2. Update `vite.config.js` base attribute to: `base: "https://{cloudflare page name}.pages.dev"`
3. Build the project with `npm run build`
4. Push your changes to your GitHub repository and cloudflare pages will pick automatically deploy assuming automatic deployment is enabled.
5. Optional: Configure a custom domain within cloudflare pages.

## License

This project is licensed under the MIT License.
