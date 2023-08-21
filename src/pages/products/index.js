import React, { useState } from "react";
import { baseUrl } from "../../../config";
import axios from "axios";
import ShopProducts from "../../components/Shop/ShopProducts";
import LayoutOne from "../../components/Layout/LayoutOne";

function Product({ data, type, className }) {
  const [product, setProduct] = useState([]);


  console.log(data, baseUrl);

  const fetchData = async () => {
    try {
      const url_pro = `${baseUrl}/api/all/products`;
      const res_pro = await axios.get(url_pro, { withCredentials: true });
      setProduct(res_pro.data.allProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <LayoutOne title="Homepage 1" className="-style-1">
      <div className="container">
        <ShopProducts
          gridColClass="col-12 col-sm-6 col-md-4 col-lg-3"
          listColClass="col-12 col-lg-6"
          view={"grid"}
          data={product.slice(0, 12)}
        />
      </div>
    </LayoutOne>
  );
}

export default Product;
