import { useEffect, useState } from "react";
import axios from "axios";

const useProduct = (pageNumber) => {
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
  const [prod, setProd] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoad(true);
    setErr(false);

    axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/products",
      params: { page: pageNumber },
    })
      .then((res) => {
        setProd((prevProd) => {
          return [...prevProd, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoad(false);
      })
      .catch((e) => {
        setErr(true);
        console.log(e);
      });
  }, [pageNumber]);
  return { load, hasMore, prod, err };
};

export default useProduct;
