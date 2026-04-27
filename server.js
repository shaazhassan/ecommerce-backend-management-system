require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const sellerRoutes = require("./modules/seller/seller.routes");
const customerRoutes = require("./modules/customer/customer.routes");
const productRoutes = require("./modules/product/product.routes");
const cartRoutes = require("./modules/cart/cart.routes");
const orderRoutes = require("./modules/order/order.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/sellers", sellerRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Ecommerce Backend Running");
});

const PORT = process.env.PORT || 5000;
// Connect to MongoDB and start the server
connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT},for testing go to http://localhost:${PORT}`);
});
});