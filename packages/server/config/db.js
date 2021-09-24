const mongoose = require("mongoose");
const consola = require("consola");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    consola.success(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    consola.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
