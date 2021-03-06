const Router = require("express").Router;

const productController = require("../controllers/product-controller");

const ProductRouter = Router();

ProductRouter.get("/", productController.getProducts);
ProductRouter.get("/:productId", productController.getSingleProduct);
ProductRouter.post("/", productController.createProduct);
ProductRouter.patch("/:productId", productController.updateProduct);
ProductRouter.delete("/:productId", productController.deleteProduct);

module.exports = ProductRouter;
