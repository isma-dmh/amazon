import { useState } from "react";
import { CategoryNav } from "../components/CategoryNav";
import { ProductList } from "../components/ProductList";

export const Home = () => {

const [selectedCategory,setSelectedCategory] = useState(null);

  return (
    <>
    <CategoryNav onCategorySelect={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory}  />;
    </>
  );
};
