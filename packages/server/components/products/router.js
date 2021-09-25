const Products = require("../../models/productModel");
module.exports = (iocContainer) => {
  const { express, controller, middlewares } = iocContainer;
  const router = express.Router();
  const asyncHandler = middlewares.asyncHandler;

  // @desc Fetch All Products
  // @access Public
  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const products = await Products.find({});
      res.send(products);
    })
  );

  // @desc Fetch single Product
  // @access Public
  router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Products.findById(req.params.id);
      if (product) return res.json(product);
      else {
        res.status(404);
        throw new Error("Product Not Found");
      }
    })
  );

  return router;
};
