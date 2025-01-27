import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 70 },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button style={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    background: "#282c34",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductList;
