import { Link } from "react-router-dom";
import "../assets/styles/components/productCard.css";

export const ProductCard = ({ id, image, nom, prix, categorie, note }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <div className="product-image-wrapper">
          <img src={image} alt={nom} className="product-image" />
        </div>

        <div className="product-badges">
          <span className="product-discount">{prix}€</span>
          <span className="product-limited-offer">{note}</span>
        </div>

        <h3 className="product-title">{nom}</h3>

        <p className="product-brand-link">{categorie}</p>
      </div>
    </Link>
  );
};
