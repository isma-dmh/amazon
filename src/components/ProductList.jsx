import "../assets/styles/components/productList.css";
import products from "../data/products.json";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categorie === selectedCategory)
    : products;

  return (
    <div className="products">
      {filteredProducts.map((product) => {
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
