import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="page-container cart-page">
        <div className="empty-cart">
          <p className="eyebrow">YOUR BASKET</p>
          <h1>Your cart is empty</h1>
          <p>Explore our plants and choose something green for your space.</p>
          <Link className="button button-primary" to="/plants">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container cart-page">
      <div className="section-heading">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} {totalItems === 1 ? "plant" : "plants"} in your cart</p>
      </div>

      <div className="cart-layout">
        <section className="cart-list">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <div className="cart-product">
                <img
                  className="cart-thumb"
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=180&q=80`}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p className="muted">Unit price: ${item.price.toFixed(2)}</p>
                  <p className="line-total">
                    Item total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="quantity-controls">
                <button
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity <= 1}
                >−</button>
                <span>{item.quantity}</span>
                <button
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >+</button>
              </div>

              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Total plants</span><strong>{totalItems}</strong>
          </div>
          <div className="summary-line total-line">
            <span>Total cost</span><strong>${totalCost.toFixed(2)}</strong>
          </div>
          <button
            className="button button-primary full-button"
            onClick={() => window.alert("Coming Soon! Checkout is not available yet.")}
          >
            Checkout
          </button>
          <Link className="continue-link" to="/plants">Continue Shopping</Link>
        </aside>
      </div>
    </main>
  );
}
