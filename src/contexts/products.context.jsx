import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";
console.log("SHOP DATA: ", SHOP_DATA);

export const ProcductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setproducts(SHOP_DATA);
  }, []);

  const value = { products };

  return (
    <ProcductsContext.Provider value={value}>
      {children}
    </ProcductsContext.Provider>
  );
};
