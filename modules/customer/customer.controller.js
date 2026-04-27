const customerService = require("./customer.service");

// REGISTER
const registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const customer = await customerService.registerCustomer(
      name,
      email,
      password
    );

    res.status(201).json({
      message: "Customer registered successfully",
      customer,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// LOGIN
const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await customerService.loginCustomer(email, password);

    res.status(200).json({
      message: "Login successful",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// LOGOUT
const logoutCustomer = async (req, res) => {
  try {
    const customerId = req.user.id;

    await customerService.logoutCustomer(customerId);

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE ACCOUNT
const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.user.id;

    await customerService.deleteCustomer(customerId);

    res.status(200).json({
      message: "Customer account deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  deleteCustomer,
};