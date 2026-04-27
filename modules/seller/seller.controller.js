const sellerService = require("./seller.service");

// REGISTER CONTROLLER
const registerSeller = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const seller = await sellerService.registerSeller(
      name,
      email,
      password
    );

    res.status(201).json({
      message: "Seller registered successfully",
      seller,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// DELETE SELLER CONTROLLER
// DELETE SELLER CONTROLLER
const deleteSeller = async (req, res) => {
  try {
    const sellerId = req.user.id;

    await sellerService.deleteSeller(sellerId);

    res.status(200).json({
      message: "Seller account deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// LOGIN CONTROLLER
const loginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await sellerService.loginSeller(email, password);

    res.status(200).json({
      message: "Login successful",
      token: result.token,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
//LOGOUT CONTROLLER (optional, can be handled on client-side by deleting token)
// LOGOUT SELLER
// LOGOUT SELLER
const logoutSeller = async (req, res) => {
  try {
    const sellerId = req.user.id;

    await sellerService.logoutSeller(sellerId);

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerSeller,
  loginSeller,
  logoutSeller,
  deleteSeller,
};