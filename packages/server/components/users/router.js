module.exports = (iocContainer) => {
  const { express, controller, mw } = iocContainer;
  const router = express.Router();
  const asyncHandler = mw.asyncHandler;

  // @desc Fetch All Products
  // @access Public
  router.post(
    "/login",
    asyncHandler(async (req, res) => {
      const { email, password } = req.body;
      const result = await controller.authUser({ email, password });
      res.json(result);
    })
  );

  // @desc get user profile
  // @access Private
  router.get(
    "/me",
    mw.requireUser,
    asyncHandler(async (req, res) => {
      const { id } = req.user;
      const result = await controller.getUserById(id);
      res.json(result);
    })
  );

  // @desc save new user
  // @access Public
  router.post(
    "/register-user",
    asyncHandler(async (req, res) => {
      const { name, email, password, phone } = req.body;
      try {
        const result = await controller.registerUser(req.body);
        return res.json(result);
      } catch (error) {
        throw new Error(error);
      }
    })
  );

  return router;
};
