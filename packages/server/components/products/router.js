module.exports = (iocContainer) => {
  const { express, controller, mw } = iocContainer;
  const router = express.Router();
  const asyncHandler = mw.asyncHandler;

  // @desc Fetch All Products
  // @access Public
  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const products = await controller.getProducts();
      res.json(products);
    })
  );

  // @desc Fetch single Product
  // @access Public
  router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await controller.getProductById(req.params.id);
      if (product) return res.json(product);
      res.status(404);
      throw new Error("Product Not Found");
    })
  );

  return router;
};
