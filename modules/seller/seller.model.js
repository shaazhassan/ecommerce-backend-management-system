const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6, // simple basic rule
    },

    role: {
      type: String,
      default: "seller",
    },
    tokenVersion: {
  type: Number,
  default: 0,
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);