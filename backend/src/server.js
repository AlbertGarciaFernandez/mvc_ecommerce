const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const productRouter = require("./routes/product-routes");
const config = require("./config/config");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(cors({origin: config.client.URL,}),);

app.use("/products", productRouter);
app.use("/users", productRouter);

module.exports = app;
