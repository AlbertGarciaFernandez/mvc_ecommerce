import { API } from "./apiRoutes";

const axios = require("axios").default;

export function productsApi() {
    return axios.create({
      baseURL: `${API.MAIN}${API.PRODUCTS}`,
    });
  }

export function getAllProducts(api = productsApi()) {
    return api.get(``);
  }

export function getProduct(productId, api = productsApi()) {
  return api.get(`/${productId}`);
}