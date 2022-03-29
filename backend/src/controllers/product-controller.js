const db = require("../models");

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find({}).lean().exec();

    res.status(200).send({
      data: products,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleProduct(req, res, next) {
  const { productId } = req.params;

  try {
    const product = await db.Product.findOne({ _id: productId }).lean().exec();

    res.status(200).send({
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  const { title, description, price, unitsInStock, starValue, images } =
    req.body;

  try {
    const product = await db.Product.create({
      title: title,
      description: description,
      price: price,
      unitsInStock: unitsInStock,
      starValue: starValue,
      images: images,
    });

    res.status(201).send({
      data: product._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const { productId } = req.params;
  const { title, description, price, unitsInStock, starValue, images } =
    req.body;

  try {
    const product = await db.Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          title: title,
          description: description,
          price: price,
          unitsInStock: unitsInStock,
          starValue: starValue,
          images: images,
        },
      },
      { new: true }
    );

    res.status(200).send({
      data: product,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params;

  try {
    const product = await db.Product.findOneAndDelete({ _id: productId });

    res.status(200).send({
      data: { _id: book._id },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
