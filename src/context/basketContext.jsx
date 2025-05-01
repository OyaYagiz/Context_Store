import { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (newProduct) => {
    setBasket(basket.concat(newProduct));
  };

  const removeFromBasket = () => {};
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {/** */}
      {children}
    </BasketContext.Provider>
  );
};
