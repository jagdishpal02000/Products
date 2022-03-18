import React from "react";

const ProductBox = (product, ref) => {
  const { id, title, price, description, image } = product.product;
  return (
    <div key={id} className="box" ref={ref}>
      <img className="product-img" src={image} alt={image} />
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <p className="cost">Cost : {price}</p>
      <a target="_blank" href={"someotherpage?id=" + id}>
        <button className="btn">Add To Cart</button>
      </a>
    </div>
  );
};

const forwardedProductBox = React.forwardRef(ProductBox);

export default forwardedProductBox;
