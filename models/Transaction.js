import mongoose from "mongoose";
import Product from "./Product";

const TransactionSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      default: "",
    },
    cardHolder: {
      type: String,
      default: "",
      isRequired: true,
    },
    phoneNumber: {
      type: String,
      default: "",
      isRequired: true,
    },
    products: {
      type: [Product],
      default: [],
    },
    shippingAddess: {
      type: String,
      default: "",
    },
    couponCode: {
      type: String,
      default: "",
    },
    usdAmount: {
      type: Number,
      default: 0,
      isRequired: true,
    },
    localAmount: {
      type: Number,
      default: 0,
      isRequired: true,
    },
    trackingNumber: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["PENDING", "SHIPPING", "SHIPPED", "CANCELLED"],
      default: "PENDING",
      isRequired: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", productSchema);
