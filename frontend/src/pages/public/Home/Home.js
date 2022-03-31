import React, { useState, useEffect } from 'react'
import { Footer, Navbar, ListProduct } from '../../../components';

import { getAllProducts } from '../../../utils/fetchProductsDb';

function Home() {

  const [productsData, setProductsData] = useState({});
  const [loadStatus, setLoadStatus] = useState({
    isError: false,
    isLoading: true,
  });

  async function loadAllProducts() {
    try {
      const { data } = await getAllProducts();
      setProductsData(data.data);
      setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    loadAllProducts();
  }, []);
  return (
    
    <div>Home
    <Navbar />
    <Footer />

    <div>
      <div className="row page-div">
        <div className="col col-8 page-left">
          {!loadStatus.isLoading && !loadStatus.isError && (
            <ListProduct products={productsData} />
          )}
          {loadStatus.isLoading && !loadStatus.isError && (
            <h4>Currently loading...</h4>
          )}
          {loadStatus.isError && !loadStatus.isLoading && <h4>ERROR TO FETCH DATA</h4>}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home