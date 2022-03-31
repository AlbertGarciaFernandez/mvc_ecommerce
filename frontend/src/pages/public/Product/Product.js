import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from '../../../utils/fetchProductsDb';

import "./Product.scss";

function Product() {

  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [loadStatus, setLoadStatus] = useState({
    isError: false,
    isLoading: true,
  });

  async function loadProduct(id) {
    try {
      const { data } = await getProduct(id);
      setProductData(data.data);
      setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    loadProduct(productId);
  }, []);

  return (
    <div className="row page-div">
      {loadStatus.isLoading && !loadStatus.isError && (
        <h3>Currently loading...</h3>
      )}
      {loadStatus.isError && !loadStatus.isLoading && <h3>ERROR</h3>}
      {!loadStatus.isLoading && !loadStatus.isError && (
        <>
          <div className="col col-8 m-0 page-left">
            <img
              className="w-100 my-0 product-image main-image custom-border"
              src={productData.images.main}
              alt={`Main ${productData.title}`}
            />
            <div className="row g-4 mt-1 mb-5 other-images">
              {productData.images.others.map((otherImg) => {
                return (
                  <div key={otherImg} className="col col-6 other-image-wrapper">
                    <img
                      className="product-image other-image custom-border"
                      key={otherImg}
                      src={otherImg}
                      alt="Other"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default (Product);