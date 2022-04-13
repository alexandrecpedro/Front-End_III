import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { data } from "../../data/data";
import "./styles.css";

export default function Home() {
  const { theme, username, handleTheme, addProductToCart } =
    useContext(CartContext);

  const [products, setProducts] = useState(data);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={handleTheme}>Change theme</button>
      {products.map((product) => (
        <div
          className="cart"
          style={
            theme === "light" ? { background: "#fff" } : { background: "#000" }
          }
        >
          <div className="container">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
            <button onClick={() => addProductToCart(product.id)}>
              Add to cart
            </button>
            {/* <button onClick={() => removeProductFromCart(product.id)}>
              Remove from cart
            </button> */}
          </div>
          <img src={product.image} />
        </div>
      ))}
      <Link to="/cart">Look cart</Link>
    </div>
  );
}
