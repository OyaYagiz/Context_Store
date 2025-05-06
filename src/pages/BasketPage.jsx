import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket } = useContext(BasketContext);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);
  return (
    <div className="mt-5 pt-5 p-2">
      <h1>SEPET</h1>
      <div>
        <div className="row g-3">
          <div className="col-lg-8">
            {basket.length === 0 ? (
              <div className="text-center my-5">
                <p>Previously add a product into the basket</p>
                <Link className="btn btn-warning" to="/">
                  Go to products...
                </Link>
              </div>
            ) : (
              basket.map((product) => (
                <BasketItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        <div className="d-flex flex-column gap-4 col-lg-4 bg-dark p-5">
          <h3>
            Toplam Ürün Sayısı:{" "}
            <span className="text-warning">{totalAmount} </span>
          </h3>
          <h3>
            Toplam Fiyat: <span className="text-warning">${totalPrice}</span>{" "}
          </h3>

          <form className="d-flex mt-4">
            <input
              className="form-control"
              placeholder="promo kodu"
              type="text"
            />
            <button className="btn btn-warning">Uygula</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
