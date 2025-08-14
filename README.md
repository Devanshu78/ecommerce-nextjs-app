# E-commerce Next.js App

This is a simple e-commerce application built with Next.js, TypeScript, and Tailwind CSS. The application features a product listing page, product detail pages, and a shopping cart.

[Active Link](https://ecommerce-nextjs-app-eosin.vercel.app/)

## Features

- **Home Page**: Displays a list of products with filtering options.
- **Product Detail Page**: Shows detailed information about a selected product.
- **Cart Page**: Allows users to view and manage their selected products.
- **Filtering Logic**: Users can filter products by categories, price range, and brands.
- **Client-side State Management**: Utilizes context API for managing cart state.
- **Dynamic Routing**: Each product has its own detail page accessible via dynamic routing.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive layout.
- **Icons**: Uses lucide-react icons for a clean UI.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ecommerce-nextjs-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Folder Structure

- `src/components`: Contains reusable components such as `Cart`, `FilterSidebar`, `Header`, `ProductCard`, and `ProductList`.
- `src/pages`: Contains the application pages including the home page, cart page, and dynamic product detail pages.
- `src/state`: Contains the state management logic for the cart.
- `src/styles`: Contains global styles for the application.
- `src/types`: Contains TypeScript interfaces for product and cart item types.
- `public`: Contains static assets like the favicon.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **lucide-react**: A collection of icons for React applications.

## License

This project is licensed under the MIT License.
