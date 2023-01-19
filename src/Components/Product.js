import React from "react";
import "../css/product.css";
function Product({ title, img, price, description }) {
  return (
    <div className="product_parent">
      <div className="product__img">
        <img src={img} />
      </div>
      <div className="product__info">
        <div className="product_details">
          <h2>{title}</h2>
          <p>
            {description.length > 30
              ? description.slice(0, 30) + " ..."
              : description.email}
          </p>
        </div>
        <div className="product_move_button">
          <button className="primary-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
