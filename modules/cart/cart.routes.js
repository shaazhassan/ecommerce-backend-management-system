const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
} = require("./cart.controller");

const authMiddleware = require("../../middleware/auth.middleware");

// All cart routes require customer login

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/:productId", authMiddleware, removeFromCart);
router.delete("/", authMiddleware, clearCart);

module.exports = router;