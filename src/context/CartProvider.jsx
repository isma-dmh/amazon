import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const incremente = () => setCount(count + 1);
  const decremente = () => setCount(count - 1);

  return (
    <CartContext.Provider value={{ count, incremente, decremente }}>
      {children}
    </CartContext.Provider>
  );
};
