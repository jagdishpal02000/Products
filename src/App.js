import React, { useState, useRef, useCallback } from "react";
import ProductBox from "./ProductBox";
import Header from "./header";
import Loading from "./loading";
import useProduct from "./useProducts";
import Error from "./Error";
import NoMoreProd from "./NoMoreProd";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(4);
  const { load, hasMore, prod, error } = useProduct(pageNumber);

  const observer = useRef();
  const lastProdRef = useCallback(
    (node) => {
      if (load) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [load, hasMore]
  );

  return (
    <>
      <Header />
      <section className="main-container">
        {prod.map((product, index) => {
          if (prod.length === index + 1) {
            return (
              <ProductBox
                ref={lastProdRef}
                product={product}
                key={product.id}
              />
            );
          } else {
            return <ProductBox product={product} key={product.id} />;
          }
        })}
        {load && <Loading />}
        {error && <Error />}
        {!hasMore && <NoMoreProd />}
      </section>
    </>
  );
};

export default App;
