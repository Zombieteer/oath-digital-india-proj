module.exports = function (iocContainer) {
  const { express } = iocContainer;

  const router = express.Router();

  //   router.use("/api/auth", require("../components/auth")(iocContainer));

  // Product Routes
  router.use("/api/products", require("../components/products")(iocContainer));

  return router;
};
