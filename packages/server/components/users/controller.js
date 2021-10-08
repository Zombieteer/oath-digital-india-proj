const User = require("../../models/userModel");
const generateToken = require("../../utils/generateToken");

const authUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User Not Found");
  const isPasswordMatch = await user.matchPassword(password);
  if (!isPasswordMatch) throw new Error("Incorrect Password");
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  };
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User Not Found");
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  };
};

const registerUser = async ({ name, email, password, phone }) => {
  let userExist = await User.findOne({ email });
  if (userExist) throw new Error("User Already Exist");
  userExist = await User.findOne({ phone });
  if (userExist) throw new Error("User Already Exist");

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user)
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  throw new Error("Invalid User Data");
};

module.exports = {
  authUser,
  getUserById,
  registerUser,
};
