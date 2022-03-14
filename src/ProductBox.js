const ProductBox = (product) => {
  const { id, title, price, description, image } = product.product;
  return (
    <div key={id} className="box">
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

export default ProductBox;
