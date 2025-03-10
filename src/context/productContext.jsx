import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

//* 1. Context yapısının temelini oluştur
export const ProductContext = createContext();

//* 2.  Verileri bileşenlere aktarıcak olan sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);
  //* 3. Sağlayıcı fonksiyonları mutlaka Provider'ı return etmeli ve App'i sarmalamalı
  //* Value olarak eklenen değerler projedeki bileşenler tarafından erişilebilir olur
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
