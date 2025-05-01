import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";
Link;
const BasketPage = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="mt-5 pt-5 container">
      <h1>SEPET</h1>

      <div>
        {basket.length === 0 ? (
          <div className="text-center my-5">
            <p>Öncelikle sepete bir ürün ekleyiniz</p>
            <Link className="btn btn-primary" to="/">
              Ürünlere Git
            </Link>
          </div>
        ) : (
          basket.map((product) => (
            <BasketItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default BasketPage;
