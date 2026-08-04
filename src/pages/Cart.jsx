import { useContext } from "react";
import "../assets/styles/pages/cart.css";
import { CartItem } from "../components/CartItem";
import { CartContext } from "../context/CartProvider";

export const Cart = () => {
  const { articles,removeAll } = useContext(CartContext);

  const subTotal = articles
    .reduce((total, a) => total + a.prix * a.quantity, 0)
    .toFixed(2)
    .replace(".", ",");

  const totalArticles = articles.reduce((total, a) => total + a.quantity, 0);

  return articles.length > 0 ? (
    <div className="cart-page">
      <div className="cart-card">
        <h1 className="cart-title">Votre panier</h1>
        <button className="deselect-link" onClick={removeAll}  >
          Supprimer tous les éléments
        </button>

        <div className="cart-header-row">
          <span className="price-label">Prix</span>
        </div>

        <div className="cart-divider" />

        {articles.map((a) => (
          <CartItem product={a} key={a.id} />
        ))}

        <div className="cart-divider" />

        <div className="cart-subtotal-row">
          Sous-total ({totalArticles} article) : <strong>{subTotal} €</strong>
        </div>
      </div>

      <aside className="cart-sidebar">
        <div className="order-summary-card">
          <p className="summary-subtotal">
            Sous-total ({totalArticles} article) : <strong>{subTotal} €</strong>
          </p>
          <button className="checkout-btn">Passer la commande</button>
        </div>
      </aside>
    </div>
  ) : (
    <div id="no-article">
      <h3>Votre panier amazon est vide</h3>
    </div>
  );
};
