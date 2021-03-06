import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
const createProduct = async (req, res) => {
  const { name, price, quantity, images, categories, description, hidden } =
    req.body;
  console.log(req.body);
  if (!name || !price || !quantity) {
    throw new BadRequestError("Invalid product data.");
  }
  const product = await Product.create({
    name,
    price,
    quantity,
    images,
    description,
    categories,
    hidden,
  });

  res.status(StatusCodes.CREATED).json({
    product: product,
  });
};

const deleteProduct = async (req, res) => {
  res.status("delete product");
};

const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const { name, price, quantity, images, isVisible, description, categories } =
    req.body;
  product.name = name;
  product.quantity = quantity;
  product.price = price;
  product.images = images;
  product.isVisible = isVisible;
  product.description = description;
  product.categories = categories;

  await product.save();
  res.status(StatusCodes.OK).json({
    product: product,
  });
};

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(StatusCodes.OK).json({
    product,
  });
};

const getProducts = async (req, res) => {
  // Access the provided 'page' and 'limt' query parameters
  const page = req.query.page;
  const limit = req.query.limit;

  // Find all products
  const products = await Product.find({
    hidden: "false",
  })
    .batchSize(limit)
    .skip(page * limit);

  // Return the articles to the rendering engine
  res.status(StatusCodes.OK).json({
    products,
  });
};

export { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
