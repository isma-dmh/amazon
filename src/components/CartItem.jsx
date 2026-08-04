import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CartItem = ({ product }) => {
  const { addArticles, removeArticles, removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.image} alt="" />
      </div>

      <div className="item-details">
        <p className="item-name">{`${product.nom} ${product.description}`}</p>

        <div className="badge-row">
          <span className="bestseller-category">dans {product.categorie}</span>
        </div>

        <p className="stock-status">En stock</p>

        <div className="prime-row">
          <span className="prime-badge">✓prime</span>
        </div>

        <p className="delivery-info">
          Livraison <strong>GRATUITE</strong>
        </p>

        <div className="item-actions">
          <div className="qty-selector">
            <button
              className="qty-btn"
              aria-label="Supprimer un exemplaire"
              onClick={() => removeItem(product)}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              className="qty-btn"
              aria-label="Ajouter un exemplaire"
              onClick={() => addArticles(product)}
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeArticles(product)}
            className="action-link"
          >
            Supprimer
          </button>
        </div>
      </div>

      <div className="item-price">
        {product.prix}
        <sup>€</sup>
      </div>
    </div>
  );
};