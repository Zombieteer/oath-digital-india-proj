const Products = require("../../models/productModel");

const getProducts = async () => {
  const products = await Products.find({});
  return products;
};

const getProductById = async (id) => {
  const product = await Products.findById(id);
  return product;
};

module.exports = {
  getProducts,
  getProductById,
};
