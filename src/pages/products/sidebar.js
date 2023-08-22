// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Link from "next/link";
// import classNames from "classnames";

// import SectionTitleOne from "../Sections/SectionTitle/SectionTitleOne";
// import { shop } from "../../common/variables";
// import { formatCurrency } from "../../common/utils";
// import {
//   setFilterCategory,
//   setFilterBrand,
//   setFilterPriceRange,
//   resetFilter,
// } from "../../redux/actions/shopActions";

// export default function ShopSidebar({ categoriesData }) {

//   const dispatch = useDispatch();
//   const filterData = useSelector((state) => state.shopReducers.filter);
//   useEffect(() => {
//     dispatch(resetFilter());
//   }, []);

//   return (
//     <div className="shop-sidebar">
//       <div className="shop-sidebar__content">
//         <div className="shop-sidebar__section -categories">
//           <SectionTitleOne className="-medium" spaceBottom={30 / 16 + "em"}>
//             Categories
//           </SectionTitleOne>
//           <ul>
//           <li key={5345}>
//                 <button
//                   style={{ background: "none", border: "none" }}
//                   onClick={(e) => {
//                       e.preventDefault();
//                       dispatch(resetFilter());
//                     }}
//                 >
//                   <a>All</a>
//                 </button>
//               </li>
//             {categoriesData.map((item, index) => (
//               <li key={index}>
//                 <button
//                   style={{ background: "none", border: "none" }}
//                   onClick={(e) => {
//                       e.preventDefault();
//                       dispatch(setFilterCategory(item.main_category_name));
//                     }}
//                 >
//                   <a>{item.main_category_name}</a>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }