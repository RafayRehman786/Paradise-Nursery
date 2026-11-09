# Paradise Nursery – Plant Shopping Application

## Project overview
Paradise Nursery is a responsive React shopping application for browsing and purchasing houseplants. Users can explore plants by category, add plants to a cart, change quantities, remove products, and view automatically calculated totals.

## Features
- Landing page with Paradise Nursery branding and a Get Started button.
- About Us page with company information.
- Three plant categories with six unique plants in each category.
- Product thumbnails, names, prices, and Add to Cart buttons.
- Add-to-cart buttons become disabled after a product is added.
- Shared navigation for Home, Plants, and Cart.
- Dynamic cart item count.
- Redux Toolkit state management.
- Increase/decrease quantities and remove cart items.
- Automatic line totals and cart total.
- Checkout button with a Coming Soon message.
- Continue Shopping navigation.

## Technologies
- React
- React Router
- Redux Toolkit
- React Redux
- CSS
- Vite

## Run locally
1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Open the terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Project files
- `src/App.jsx` – application routes, landing page, and navigation.
- `src/App.css` – page layout, styling, and landing-page background image.
- `src/components/AboutUs.jsx` – company information.
- `src/redux/CartSlice.jsx` – Redux store and cart actions.
- `src/components/ProductList.jsx` – categorized plant catalogue and Add to Cart.
- `src/components/CartItem.jsx` – cart items, quantity controls, totals, and checkout.

## Notes
Plant photos are loaded from Unsplash URLs, so an internet connection is required to display them. The checkout button is a demonstration only and does not process payments.
