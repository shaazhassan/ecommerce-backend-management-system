const express = require("express");
const router = express.Router();

const {
  addProduct,
  getSellerProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("./product.controller");

const authMiddleware = require("../../middleware/auth.middleware");
//public route to get all products for customers
router.get("/all", getAllProducts);

// Only sellers should manage products

router.post("/", authMiddleware, addProduct);

router.get("/", authMiddleware, getSellerProducts);

router.put("/:productId", authMiddleware, updateProduct);

router.delete("/:productId", authMiddleware, deleteProduct);

module.exports = router;