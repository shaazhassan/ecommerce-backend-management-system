const express = require("express");
const router = express.Router();

const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  deleteCustomer,
} = require("./customer.controller");

const authMiddleware = require("../../middleware/auth.middleware");

// PUBLIC ROUTES
router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

// PROTECTED ROUTES
router.post("/logout", authMiddleware, logoutCustomer);
router.delete("/delete", authMiddleware, deleteCustomer);

module.exports = router;