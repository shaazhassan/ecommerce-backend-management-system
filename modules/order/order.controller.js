const orderService = require("./order.service");

// PLACE ORDER
const placeOrder = async (req, res) => {
  try {
    const customerId = req.user.id;

    const order = await orderService.createOrder(customerId);

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET ORDERS
const getOrders = async (req, res) => {
  try {
    const customerId = req.user.id;

    const orders = await orderService.getOrders(customerId);

    res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};