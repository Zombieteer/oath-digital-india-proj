const express = require("express");
const consola = require("consola");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env config
dotenv.config();
// connect to db
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.send("API is running");
});

const mode = process.env.NODE_ENV;
const PORT = process.env.SERVER_PORT || 3001;

app.listen(
  3001,
  consola.success(`Server Running in ${mode} mode on port ${PORT}`)
);
