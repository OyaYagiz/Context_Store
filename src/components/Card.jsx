import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);

  // context yapısında sepete ekleme fonksiyonuna aldık

  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} height={120} className="object-fit-contain" />
      </div>

      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <button onClick={() => addToBasket(product)} className="w-100 rounded bg-dark text-white">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
