import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const addArticles = (article) => {
    const existing = articles.find((a) => a.id === article.id);
    if (existing) {
      setArticles(
        articles.map((a) =>
          a.id === article.id ? { ...a, quantity: a.quantity + 1 } : a,
        ),
      );
    } else {
      setArticles([...articles, { ...article, quantity: 1 }]);
    }
  };
  const removeArticles = (articleRemoved) => {
    const newArticles = articles.filter((a) => a.id !== articleRemoved.id);
    setArticles(newArticles);
  };

  const removeItem = (itemRemoved) => {
    setArticles(
      articles.map((a) =>
        a.id === itemRemoved.id ? { ...a, quantity: a.quantity - 1 } : a,
      ),
    );
    if (itemRemoved.quantity === 1) removeArticles(itemRemoved);
  };

  const removeAll = () => {
    setArticles([]);
  };

  return (
    <CartContext.Provider
      value={{ articles, addArticles, removeArticles, removeItem, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};
