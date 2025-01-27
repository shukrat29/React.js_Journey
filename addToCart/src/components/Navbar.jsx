import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={styles.navbar}>
      <h1 onClick={() => navigate("/")} style={styles.logo}>
        My Store
      </h1>
      <div style={styles.cart} onClick={() => navigate("/cart")}>
        <span>🛒</span>
        <span style={styles.cartCount}>{totalItems}</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#282c34",
    color: "white",
    cursor: "pointer",
  },
  cart: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
  },
  cartCount: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.9rem",
  },
  logo: {
    cursor: "pointer",
  },
};

export default Navbar;
