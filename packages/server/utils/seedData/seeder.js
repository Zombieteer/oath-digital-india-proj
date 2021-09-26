const dotenv = require('dotenv')
const consola = require('consola')
const Order = require('../../models/orderModel')
const User = require('../../models/userModel')
const Product = require('../../models/productModel')
const connectDB = require('../../config/db')
const products = require('./productsData')
const users = require('./usersData')

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(sampleProducts);

    consola.success("Data Imported");
    process.exit();
  } catch (error) {
    consola.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    consola.success("Data Destroyed");
    process.exit();
  } catch (error) {
    consola.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
