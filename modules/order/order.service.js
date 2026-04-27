const Order = require("./order.model");
const Cart = require("../cart/cart.model");

// CREATE ORDER FROM CART
const createOrder = async (customerId) => {
  const cart = await Cart.findOne({ customer: customerId }).populate(
    "items.product"
  );

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  let totalAmount = 0;

  const orderItems = cart.items.map((item) => {
    const price = item.product.price;
    totalAmount += price * item.quantity;

    return {
      product: item.product._id,
      quantity: item.quantity,
      price,
    };
  });

  const order = await Order.create({
    customer: customerId,
    items: orderItems,
    totalAmount,
  });

  // Clear cart after order
  cart.items = [];
  await cart.save();

  return order;
};

// GET CUSTOMER ORDERS
const getOrders = async (customerId) => {
  const orders = await Order.find({ customer: customerId })
    .populate("items.product");

  return orders;
};

module.exports = {
  createOrder,
  getOrders,
};