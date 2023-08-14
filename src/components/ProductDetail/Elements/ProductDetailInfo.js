import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";

import { formatCurrency } from "../../../common/utils";
import { addToCart } from "../../../redux/actions/cartActions";
import { addToWishlist } from "../../../redux/actions/wishlistActions";
import ProductDetailController from "./ProductDetailController";
import ProductDetailInfoTab from "./ProductDetailInfoTab";
import Rate from "../../Other/Rate";
import { checkProductInWishList } from "../../../common/shopUtils";
import axios from "axios";
import { baseUrl } from "../../../../config";

export default function ProductDetailInfo({ data, onReviewSubmit, hideTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const [quantity, setQuantity] = useState();
  const [otherColor, setOtherColor] = useState();
  const getQuantity = (q) => {
    setQuantity(q);
  };
  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(data, quantity, otherColor));
    toast.success("Product added to cart");
  };
  const onAddToWishList = (e) => {
    e.preventDefault();
    let product = checkProductInWishList(wishlistState, data._id);
    dispatch(addToWishlist(data));
    toast.dismiss();
    if (!product) {
      return toast.success("Product added to wishlist !");
    } else {
      return toast.error("Product removed from wishlist !");
    }
  };

  const [name, setName] = useState("");
  const [phNum, setPhNum] = useState("");
  const [message, setMessage] = useState("");
  // const [d, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, phNum, message, data?.productID);

    try {
      const url = `${baseUrl}/api/add/enquiry`;
      const res = await axios.post(
        url,
        {
          name: name,
          phone_no: phNum,
          message: message,
          product_detail: data?.productID,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    closeForm();
  };

  return (
    <div className="product-detail__content">
      <div className="product-detail__content__header">
        <h5>{data.category}</h5>
        <h2>{data.name}</h2>
        {/* <div className="product-detail__content__header__comment-block">
          <Rate currentRate={data.rate} />
          <p>03 Reviews</p>
          <Link href={process.env.PUBLUC_URL + "#"}>
            <a>Write a reviews</a>
          </Link>
        </div> */}
        <h3>
          {formatCurrency(data.price)}
          {/* {data.discount
            ? formatCurrency(data.product_sale_price)
            : formatCurrency(data.product_sale_price)}
          {data.discount && (
            <span>{formatCurrency(data.product_sale_price)}</span>
          )} */}
        </h3>
      </div>
      <div className="divider"></div>
      <div className="product-detail__content__footer">
        <ul>
          <li>
            Brand: <span>{data.category}</span>
          </li>
          <li>
            Product code: <span>{data.id}</span>
          </li>
          {/* <li>
            Reward point: <span>{data.product_reword_point}</span>
          </li> */}
          {/* <li>
            Availability:
            {data.quantity > 0 ? (
              <span className="in-stock"> In Stock</span>
            ) : (
              <span className="out-stock"> Out Stock</span>
            )}
          </li> */}
        </ul>
        {data.variation && (
          <div className="product-detail__colors">
            {/* <span>Color:</span>
            {data.variation.map((color, index) => (
              <div
                key={index}
                className={`product-detail__colors__item ${classNames({
                  active: otherColor === color.color,
                })}`}
                style={{ backgroundColor: color.colorCode }}
                onClick={() => setOtherColor(color.color)}
              />
            ))} */}
          </div>
        )}
        {/* <ProductDetailController
          data={data}
          getQuantity={getQuantity}
          onAddToCart={onAddToCart}
          onAddToWishList={onAddToWishList}
          color={otherColor}
        /> */}

        {/* <button className="btn -red">{}
          Make an enquiry
        </button> */}

        <button onClick={openForm} className="btn -red">
          Make an enquiry
        </button>

        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closeForm}>
                &times;
              </span>
              <h2>Enquiry Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="formData">
                <label htmlFor="name" className="name">Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  required
                /><br></br>

                <label htmlFor="phone" className="phone">Phone Number:</label>
                <input
                  value={phNum}
                  onChange={(e) => setPhNum(e.target.value)}
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                /> <br></br>

                <label htmlFor="message"  className="message">Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  rows="4"
                  required
                />
                </div>
                <br></br>

                <button className="button" type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>

      {!hideTab && (
        <>
          <div className="divider"></div>
          <div className="product-detail__content__tab">
            <ProductDetailInfoTab data={data} onReviewSubmit={onReviewSubmit} />
          </div>
        </>
      )}
    </div>
  );
}
