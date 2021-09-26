const bcrypt = require("bcrypt");

const users = [
  {
    name: "Shobhit Nigam",
    email: "rahulgtaf@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    phone: 9999999991,
  },
  {
    name: "Sumit Sinha",
    email: "sumit.sinha200@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    phone: 9999999992,
  },
  {
    name: "Kamal",
    email: "kamal@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    phone: 9999999993,
  },
];

module.exports = users;
