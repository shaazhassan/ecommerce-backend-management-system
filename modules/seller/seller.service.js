const Seller = require("./seller.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER SELLER
const registerSeller = async (name, email, password) => {
  const existingSeller = await Seller.findOne({ email });

  if (existingSeller) {
    throw new Error("Seller already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const seller = await Seller.create({
    name,
    email,
    password: hashedPassword,
  });

  return seller;
};

// LOGIN SELLER
const loginSeller = async (email, password) => {
  const seller = await Seller.findOne({ email });

  if (!seller) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, seller.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: seller._id, role: seller.role ,tokenVersion: seller.tokenVersion},
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { seller, token };
};

// DELETE SELLER  ✅ Now correctly outside loginSeller
const deleteSeller = async (sellerId) => {
  const seller = await Seller.findByIdAndDelete(sellerId);

  if (!seller) {
    throw new Error("Seller not found");
  }

  return;
};

// LOGOUT SELLER
const logoutSeller = async (sellerId) => {
  await Seller.findByIdAndUpdate(sellerId, {
    $inc: { tokenVersion: 1 },
  });

  return;
};

module.exports = {
  registerSeller,
  loginSeller,
  deleteSeller,
  logoutSeller,
};