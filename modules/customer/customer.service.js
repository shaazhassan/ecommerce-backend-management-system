const Customer = require("./customer.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER CUSTOMER
const registerCustomer = async (name, email, password) => {
  const existingCustomer = await Customer.findOne({ email });

  if (existingCustomer) {
    throw new Error("Customer already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = await Customer.create({
    name,
    email,
    password: hashedPassword,
  });

  return customer;
};

// LOGIN CUSTOMER
const loginCustomer = async (email, password) => {
  const customer = await Customer.findOne({ email });

  if (!customer) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, customer.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: customer._id,
      role: customer.role,
      tokenVersion: customer.tokenVersion,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
  id: customer._id,
  name: customer.name,
  email: customer.email,
  role: customer.role,
  token,
};
};

// LOGOUT CUSTOMER
const logoutCustomer = async (customerId) => {
  await Customer.findByIdAndUpdate(customerId, {
    $inc: { tokenVersion: 1 },
  });

  return;
};

// DELETE CUSTOMER
const deleteCustomer = async (customerId) => {
  const customer = await Customer.findByIdAndDelete(customerId);

  if (!customer) {
    throw new Error("Customer not found");
  }

  return;
};

module.exports = {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  deleteCustomer,
};