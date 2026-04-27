const Cart = require("./cart.model");
const Product = require("../product/product.model");

// ADD TO CART
const addToCart = async (customerId, productId, quantity) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  let cart = await Cart.findOne({ customer: customerId });

  if (!cart) {
    cart = await Cart.create({
      customer: customerId,
      items: [],
    });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      product: productId,
      quantity,
    });
  }

  await cart.save();

  return cart;
};

// GET CART
const getCart = async (customerId) => {
  const cart = await Cart.findOne({ customer: customerId })
    .populate("items.product");

  return cart;
};

// REMOVE ITEM FROM CART
const removeFromCart = async (customerId, productId) => {
  const cart = await Cart.findOne({ customer: customerId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId
  );

  await cart.save();

  return cart;
};

// CLEAR CART
const clearCart = async (customerId) => {
  const cart = await Cart.findOne({ customer: customerId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = [];
  await cart.save();

  return;
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
};