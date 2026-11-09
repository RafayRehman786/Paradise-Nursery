import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="brand">Paradise <span>Nursery</span></Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="cart-nav">
          Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">GROW A HAPPIER SPACE</p>
        <h1>Bring Nature <em>Home.</em></h1>
        <p>
          Discover beautiful houseplants that make your home feel fresher,
          calmer, and more alive.
        </p>
        <div className="hero-actions">
          <Link to="/plants" className="button button-primary">Get Started</Link>
          <Link to="/about" className="text-link">Discover our story</Link>
        </div>
      </div>
      <div className="hero-note">
        <span>01</span>
        <p>Small plants.<br />Big happiness.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Paradise Nursery. Grow something beautiful.</p>
      </footer>
    </>
  );
}
