import { useParams } from "react-router-dom";
import products from "../data/products.json";
import "../assets/styles/pages/product.css";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

function Star({ filled }) {
  return (
    <svg
      className="produit-star"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill={filled ? "#FFA41C" : "#e0e0e0"}
      aria-hidden="true"
    >
      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.8 4.4 18l1.4-6.2L1 7.5l6.4-.6z" />
    </svg>
  );
}

function StarRating({ note }) {
  // note sur 5, ex: 4.2 -> 4 étoiles pleines + 1 vide (arrondi simple)
  const fullStars = Math.round(note);
  return (
    <div className="produit-rating-row">
      <span className="produit-stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} filled={i <= fullStars} />
        ))}
      </span>
      <span className="produit-rating-value">
        {note.toString().replace(".", ",")}
      </span>
    </div>
  );
}

export const Product = () => {
  const { id } = useParams();
  const product = products.find((element) => element.id === Number(id));
  const [partieEntiere, partieDecimale] = product.prix.toFixed(2).split(".");
  const { addArticles } = useContext(CartContext);
  return (
    <div className="produit-page">
      <div className="produit-container">
        <div className="produit-breadcrumb">
          <span className="link">Accueil</span> &rsaquo;{" "}
          <span className="link">{product.categorie}</span> &rsaquo;{" "}
          {product.nom}
        </div>

        <div className="produit-layout">
          {/* Colonne 1 : média */}
          <div>
            <img
              src={product.image}
              alt={product.nom}
              className="produit-media"
            />
          </div>

          {/* Colonne 2 : informations */}
          <div>
            <h1 className="produit-title">{product.nom}</h1>

            <StarRating note={product.note} />

            <span className="produit-category-tag">{product.categorie}</span>

            <hr className="produit-hr" />

            <div className="produit-desc-title">À propos de cet article</div>
            <p className="produit-description">{product.description}</p>
          </div>

          {/* Colonne 3 : achat */}
          <div className="produit-buybox">
            <div className="produit-price">
              <sup>€</sup>
              {partieEntiere}
              <sup className="produit-price-decimals">{partieDecimale}</sup>
            </div>
            <div className="produit-stock">En stock</div>
            <button
              onClick={() => addArticles(product)}
              className="produit-btn produit-btn-primary"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
