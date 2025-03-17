# Jekyll with Tailwind CSS v4

A starter template for using Jekyll with Tailwind CSS v4 integration. This project includes livereload for development and optimized CSS for production.

## Prerequisites

- Ruby and Jekyll installed
- Node.js and npm installed

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/jekyll-tailwind-v4.git
   cd jekyll-tailwind-v4
   ```

2. Install Ruby dependencies:

   ```bash
   bundle install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server with livereload:

```bash
npm run dev
```

This will:

- Process the CSS with Tailwind CSS and watch for changes
- Start the Jekyll server with livereload enabled
- Open the site at http://localhost:4000

## Production Build

To build the site for production:

```bash
npm run build
```

This will:

- Process and optimize the CSS with Tailwind CSS and cssnano
- Build the Jekyll site with production settings
- Output the site to the `_site` directory

## Features

- Jekyll site structure
- Tailwind CSS v4 integration
- PostCSS processing
- CSS optimization for production
- Dark mode support
- Responsive design

## Customization

### Tailwind CSS

The Tailwind CSS configuration is in `tailwind.config.js`. You can modify this file to customize your design system.

### Jekyll

The Jekyll configuration is in `_config.yml`. You can modify this file to customize your site settings.
