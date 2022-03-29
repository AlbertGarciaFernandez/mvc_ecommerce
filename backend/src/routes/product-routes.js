const Router = require("express").Router;

// const productController = require("../controllers/product-controller");

const ProductRouter = Router();

ProductRouter.get("/");
ProductRouter.get("/:productId");
ProductRouter.post("/");
ProductRouter.patch("/:productId");
ProductRouter.delete("/:productId");

module.exports = BookRouter;
