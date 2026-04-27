const Product = require("./product.model");


// ADD PRODUCT
const addProduct = async (sellerId, name, description, price) => {
  const product = await Product.create({
    name,
    description,
    price,
    seller: sellerId,
  });

  return product;
};

// GET SELLER PRODUCTS
const getSellerProducts = async (sellerId) => {
  const products = await Product.find({ seller: sellerId });

  return products;
};

// UPDATE PRODUCT
const updateProduct = async (sellerId, productId, updateData) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  // Ownership check
  if (product.seller.toString() !== sellerId) {
    throw new Error("Unauthorized action");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    { new: true }
  );

  return updatedProduct;
};
// DELETE PRODUCT

const deleteProduct = async (sellerId, productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  // Ownership check
  if (product.seller.toString() !== sellerId) {
    throw new Error("Unauthorized action");
  }

  await Product.findByIdAndDelete(productId);

  return;
};
// GET ALL PRODUCTS (Customer view)
const getAllProducts = async () => {
  const products = await Product.find().populate("seller", "name email");
  return products;
};

module.exports = {
  addProduct,
  getSellerProducts,
  updateProduct,
  deleteProduct,
  getAllProducts,
};