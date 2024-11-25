npx create-react-app react-product-listing
cd react-product-listing
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"], // You can change themes here
  },
}
@tailwind base;
@tailwind components;
@tailwind utilities;
// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 text-center">
      <h1 className="text-3xl font-bold">Product Listing</h1>
    </header>
  );
};

export default Header;
// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 text-center mt-10">
      <p>&copy; 2024 Product Listing Company</p>
    </footer>
  );
};

export default Footer;
// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} className="h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// src/components/Main.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'Product 1', description: 'A great product', price: 29.99, imageUrl: 'https://via.placeholder.com/200' },
  { id: 2, title: 'Product 2', description: 'Another awesome product', price: 19.99, imageUrl: 'https://via.placeholder.com/200' },
  { id: 3, title: 'Product 3', description: 'Top rated product', price: 49.99, imageUrl: 'https://via.placeholder.com/200' },
  { id: 4, title: 'Product 4', description: 'Best value product', price: 15.99, imageUrl: 'https://via.placeholder.com/200' },
];

const Main = () => {
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
// src/App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
npm start
