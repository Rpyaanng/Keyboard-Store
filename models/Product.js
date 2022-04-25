import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 20,
      default: "Product Name",
      isRequired: true,
    },
    price: {
      type: Number,
      min: 0,
      max: 1000000,
      default: 1000000,
      isRequired: true,
    },
    quantity: {
      type: Number,
      min: 0,
      max: 1000000,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    categories: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    discounted: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    variants: {
      type: [
        {
          name: {
            type: String,
            minlength: 1,
            maxlength: 20,
            default: "Variant Name",
            isRequired: true,
          },
          price: {
            type: Number,
            min: -1000000,
            max: 1000000,
            default: 0,
            isRequired: true,
          },
          quantity: {
            type: Number,
            min: 0,
            max: 1000000,
            default: 0,
          },
          image: {
            type: String,
            default: "",
          },
        },
      ],
    },
    colors: {
      type: [
        {
          name: {
            type: String,
            minlength: 1,
            maxlength: 20,
            default: "Color Name",
            isRequired: true,
          },
          hex: {
            type: String,
            default: "#FFFFFF",
          },
          price: {
            type: Number,
            min: -1000000,
            max: 1000000,
            default: 0,
            isRequired: true,
          },
        },
      ],
    },
    addons: {
      type: [
        {
          name: {
            type: String,
            minlength: 1,
            maxlength: 20,
            default: "Addon Name",
            isRequired: true,
          },
          price: {
            type: Number,
            min: 0,
            max: 1000000,
            default: 0,
            isRequired: true,
          },
          quantity: {
            type: Number,
            min: 0,
            max: 1000000,
            default: 0,
          },
          image: {
            type: String,
            default: "",
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
