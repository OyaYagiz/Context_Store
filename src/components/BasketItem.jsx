const BasketItem = ({ product }) => {
  return (
    <div className="bg-secondary rounded p-2">
      <img
        className="object-fit-contain"
        height={100}
        width={100}
        src={product.image}
        alt={product.title}
      />
      <div></div>
    </div>
  );
};

export default BasketItem;
