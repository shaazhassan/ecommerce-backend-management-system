const cartService = require("./cart.service");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const customerId = req.user.id;
    const { productId, quantity } = req.body;

    const cart = await cartService.addToCart(
      customerId,
      productId,
      quantity || 1
    );

    res.status(200).json({
      message: "Added to cart",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const customerId = req.user.id;

    const cart = await cartService.getCart(customerId);

    res.status(200).json({
      cart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// REMOVE ITEM
const removeFromCart = async (req, res) => {
  try {
    const customerId = req.user.id;
    const { productId } = req.params;

    const cart = await cartService.removeFromCart(customerId, productId);

    res.status(200).json({
      message: "Item removed",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// CLEAR CART
const clearCart = async (req, res) => {
  try {
    const customerId = req.user.id;

    await cartService.clearCart(customerId);

    res.status(200).json({
      message: "Cart cleared",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
};