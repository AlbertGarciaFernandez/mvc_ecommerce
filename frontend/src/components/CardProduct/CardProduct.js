import React from "react";
import { Link } from "react-router-dom";

import "./CardProduct.scss";


export default function CardProduct({ product }) {
  return (
    <div className="col">
      <Link to={`/product/${product._id}`}>
        <div className="card h-100 border-0">
          <div className="custom-border product-card-img-container d-flex align-items-center justify-content-center">
            <img
              className="px-4 product-card-img img-fluid"
              src={product.images.main}
              alt={`${product.title}`}
            />
          </div>
          <div className="card-body p-0 py-3">
            <h5 className="font-bold medium-big-text text-truncate">
              {product.title}
            </h5>
            <div className="row">
              <div className="col-6 pe-0">
                {product.unitsInStock > 0 && (
                  <p className="intermediate-text">In stock</p>
                )}
              </div>
              <div className="col-6 ps-0">
                <p className="text-end intermediate-text font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}