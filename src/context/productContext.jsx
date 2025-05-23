import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

//* 1. Context yapısının temelini oluştur
export const ProductContext = createContext();

//* 2.  Verileri bileşenlere aktarıcak olan sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //* 3. Sağlayıcı fonksiyonları mutlaka Provider'ı return etmeli ve App'i sarmalamalı
  //* Value olarak eklenen değerler projedeki bileşenler tarafından erişilebilir olur
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
