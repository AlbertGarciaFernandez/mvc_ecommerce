const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const productRouter = require("./routes/product-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use("/products", productRouter);
app.use("/users", productRouter);

module.exports = app;
