module.exports = function (iocContainer) {
  const { express } = iocContainer;

  const router = express.Router();

  //   router.use("/api/auth", require("../components/auth")(iocContainer));

  // Product Routes
  router.use("/api/products", require("../components/products")(iocContainer));
  
  // User Routes
  router.use("/api/users", require("../components/users")(iocContainer));

  return router;
};
