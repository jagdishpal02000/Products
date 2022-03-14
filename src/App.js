import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import Header from "./header";
import Loading from "./loading";
const url = "https://fakestoreapi.com/products";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const products = await resp.json();
      setLoading(false);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <Header />
      <section className="main-container">
        {products.map((product) => {
          return <ProductBox product={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default App;
