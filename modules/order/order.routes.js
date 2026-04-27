const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getOrders,
} = require("./order.controller");

const authMiddleware = require("../../middleware/auth.middleware");

router.post("/", authMiddleware, placeOrder);
router.get("/", authMiddleware, getOrders);

module.exports = router;