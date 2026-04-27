const productService = require("./product.service");

// ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const { name, description, price } = req.body;

    const product = await productService.addProduct(
      sellerId,
      name,
      description,
      price
    );

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET SELLER PRODUCTS
const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.user.id;

    const products = await productService.getSellerProducts(sellerId);

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const { productId } = req.params;

    const updatedProduct = await productService.updateProduct(
      sellerId,
      productId,
      req.body
    );

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const { productId } = req.params;

    await productService.deleteProduct(sellerId, productId);

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProduct,
  getSellerProducts,
  updateProduct,
  deleteProduct,
  getAllProducts,
};