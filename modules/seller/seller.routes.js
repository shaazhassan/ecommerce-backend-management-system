const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth.middleware");

const {
  registerSeller,
  loginSeller,
  logoutSeller,
  deleteSeller,
} = require("./seller.controller");

// Routes
router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.post("/logout",authMiddleware, logoutSeller);
module.exports = router;



router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});
router.delete("/delete", authMiddleware, deleteSeller);