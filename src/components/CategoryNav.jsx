import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "../assets/styles/components/categoryNav.css";
import products from "../data/products.json";

export const CategoryNav = ({ onCategorySelect }) => {
  const uniqueCategories = [
    "Tout",
    ...new Set(products.map((product) => product.categorie))
  ];

  const newCategories = uniqueCategories.map((c, i) => ({
    id: i,
    value: c,
    isFocused: false,
  }));

  const [categories, setCategories] = useState(newCategories);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (id) => {
    const newCat = categories.map((cat) => ({
      ...cat,
      isFocused: cat.id === id ? true : false,
    }));
    setCategories(newCat);

    const clicked = newCat.find((cat) => cat.id === id);

    onCategorySelect(clicked.value);
  };

  return (
    <div className="category-nav">
      <button
        className="category-nav-arrow category-nav-arrow-left"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="category-nav-list" ref={scrollRef}>

        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-pill ${category.isFocused ? "category-pill-active" : ""}`}
            onClick={() => handleClick(category.id)}
          >
            {category.value}
          </button>
        ))}
      </div>

      <button
        className="category-nav-arrow category-nav-arrow-right"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
