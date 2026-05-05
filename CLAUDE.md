# Bombshell Wax Website

Custom Shopify theme for Bombshell Wax, a professional wax/beauty supply brand.

## Repository

- GitHub: https://github.com/nmitch31/Bombshell-Wax-Website
- Branch strategy: `dev` for active development, `main` for production

## Project Structure

- `assets/` — CSS, JS, images, fonts (includes Bootstrap, custom engo styles, ajax-cart)
- `sections/` — Liquid section files (product, collection, banners, FAQ, etc.)
- `templates/` — JSON templates mapping pages to sections (many collection-specific templates)
- `layout/` — Theme layout files (header/footer wrappers)
- `snippets/` — Reusable Liquid partials
- `blocks/` — Shopify block definitions
- `config/` — Theme settings (`settings_data.json`, `settings_schema.json`)
- `locales/` — Translation strings

## Key Files

- `assets/engo-customizes.css.liquid` — Main custom stylesheet (dynamically generated via Liquid)
- `sections/header.liquid`, `sections/footer.liquid` — Global header/footer
- `sections/product-template.liquid` — Main product page
- `sections/collection-template.liquid` — Main collection page

## Workflow

- Always work on `dev` branch, never commit directly to `main`
- Push to `origin/dev` after changes; merge to `main` for production deploys
- Theme is deployed via Shopify — changes pushed to GitHub sync to the live store

## Tech Stack

- Shopify Liquid templating
- Bootstrap 4 (bootstrap.min.css + bootstrap.bundle.min.js)
- Custom CSS in `engo-customizes.css.liquid` (825KB — large file, edit carefully)
- jQuery + custom JS in `engo-scripts.js`, `engo-plugins.js`
- Ajax cart in `ajax-cart.js.liquid`
