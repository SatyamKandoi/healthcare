import React from "react";
import "./medicine.css"

const Cart = ({ cart }) => {
  const getTotalCost = () => {
    return cart.reduce((total, item) => Number(total) +  Number(item.price), 0);
  };

  return (
    <div className="carting">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.idmedicine}>
                {item.title} - Quantity: {item.quantity} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p>Total: ₹{getTotalCost()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;