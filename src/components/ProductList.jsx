import "../assets/styles/components/productList.css";
import products from "../data/products.json";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            nom={product.nom}
            prix={product.prix}
            note={product.note}
            description={product.description}
            categorie={product.categorie}
          />
        );
      })}
    </div>
  );
};
