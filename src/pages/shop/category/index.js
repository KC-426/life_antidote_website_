import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import products from "../../../data/products.json";
import { getProductBySlug } from "../../../common/productSelect";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import InstagramTwo from "../../../components/Sections/Instagram/InstagramTwo";
import LayoutFour from "../../../components/Layout/LayoutOne";
import { baseUrl } from "../../../../config.js";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../components/Other/Breadcrumb";
import ProductSlideTwo from "../../../components/Sections/ProductThumb/ProductSlide/ProductSlideTwo";

// export default function () {
//   const router = useRouter();
//   const { slug } = router.query;
//   console.log(slug);
//   const [foundProduct, setFoundProduct] = useState({
//     productID : "",
//     id: "",
//     category: "",
//     name: "",
//     // rate: 0,
//     // price: 0,
//     // new: true,
//     // brand: "",
//     // code: "",
//     // point: 0,
//     // quantity: 0,
//     // variation: [],
//     // thumbImage: [],
//     // images: [],
//     // description: "",
//     // slug: "",
//   });
//   const fetchData = async () => {
//     try {
//       const url = "http://localhost:5000/api/get/all/category";

//       const res = await axios.get(url, { withCredentials: true });
//       console.log(res?.data);
//       setFoundProduct(res.data.all_categories)
//       setFoundProduct({
//         productID: res?.data._id,
//         id: res?.data.product_id,
//         category: res?.data.product_main_category,
//         name: res?.data.product_name,
//         // rate: 4,
//         // price: res?.data.product_sale_price,
//         // new: res?.data.new_arrival,
//         // brand: "",
//         // code: res?.data.product_code,
//         // point: 0,
//         // quantity: res?.quantity,
//         // variation: [],
//         // thumbImage: res?.data.product_images,
//         // images: res?.data.product_images,
//         // description: res?.data.product_description,
//         // slug: res?.data.product_slug,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useState(() => {
//     fetchData();
//   }, []);
//   // let foundProduct = getProductBySlug(products, slug);
//   console.log(foundProduct);
//   const onReviewSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//      {foundProduct.map((category) => (
//           <li key={main_category.id}>
//             <h3>{category?.main_category_name}</h3>
//             <img src={category?.main_category_image?.image_url}
//             />
//           </li>

//         ))}
//     </div>
//     // foundProduct !== null && (
//     //   <LayoutFour title={foundProduct.name}>
//     //     <Breadcrumb title="Product Detail">
//     //       <BreadcrumbItem name="Home" />
//     //       <BreadcrumbItem name="Shop" />
//     //       <BreadcrumbItem data={foundProduct.name} current />
//     //       {/* <BreadcrumbItem name={foundProduct.name} current /> */}
//     //     </Breadcrumb>
//     //     <ProductDetail data={foundProduct} onReviewSubmit={onReviewSubmit} />
//     //     {/* <ProductSlideTwo data={products} /> */}
//     //     {/* <InstagramTwo /> */}
//     //   </LayoutFour>
//     )
// }

export default function () {
  const [foundProducts, setFoundProducts] = useState([]);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/api/all/products/by/cate/${slug}`;

        const res = await axios.get(url, { withCredentials: true });
        console.log(res);
        setFoundProducts(res?.data?.allProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <LayoutFour title={"Shop"}>
      <Breadcrumb title="Product Detail">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Shop" />
      </Breadcrumb>
      <div>
        {foundProducts.map((category) => (
          <div key={category._id}>
            <div>{category?.product_name}</div>
            <img
              src={category?.product_images[0]?.image_url}
              alt={category.main_category_name}
            />
          </div>
        ))}
      </div>
    </LayoutFour>
  );
}
