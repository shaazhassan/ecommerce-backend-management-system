const jwt = require("jsonwebtoken");
const Seller = require("../modules/seller/seller.model");
const Customer = require("../modules/customer/customer.model");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  // Expected format: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Invalid token format",
    });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user;

    // Check role and fetch correct user
    if (decoded.role === "seller") {
      user = await Seller.findById(decoded.id);
    } else if (decoded.role === "customer") {
      user = await Customer.findById(decoded.id);
    } else {
      return res.status(401).json({
        message: "Invalid role",
      });
    }

    if (!user) {
      return res.status(401).json({
        message: "User no longer exists",
      });
    }

    // Check token version (for logout system)
    if (decoded.tokenVersion !== user.tokenVersion) {
      return res.status(401).json({
        message: "Session expired. Please login again.",
      });
    }

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;