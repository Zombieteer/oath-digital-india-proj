const express = require("express");
const consola = require("consola");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./router");
const middlewares = require("./middlewares");

const startServer = () => {
  // env config
  dotenv.config();
  // connect to db
  connectDB();

  const iocContainer = {
    express,
    router,
    mw: middlewares,
  };
  const app = express();
  app.use(express.json({ limit: "50mb" }));

  app.get("/ping", (req, res) => {
    res.send("pong");
  });

  app.use(router(iocContainer));
  app.use(middlewares.expressErrorHandler());
  app.use(middlewares.notFound());

  const mode = process.env.NODE_ENV;
  const PORT = process.env.SERVER_PORT || 3001;

  app.listen(
    3001,
    consola.success(`Server Running in ${mode} mode on port ${PORT}`)
  );
};
startServer();
