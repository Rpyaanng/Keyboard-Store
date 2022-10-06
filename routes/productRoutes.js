import express from "express";

const router = express.Router();

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getCategory,
} from "../controllers/productController.js";
import authenticateUser from "../middleware/auth.js";
import authenticateAdmin from "../middleware/admin.js";
router
  .route("/")
  .post(authenticateUser, authenticateAdmin, createProduct)
  .get(getProducts);
router
  .route("/:id")
  .get(getProduct)
  .delete(authenticateUser, authenticateAdmin, deleteProduct)
  .patch(authenticateUser, authenticateAdmin, updateProduct);
router
  .route("/category/:category")
  .get(getCategory)
  .delete(authenticateUser, authenticateAdmin, deleteProduct)
  .patch(authenticateUser, authenticateAdmin, updateProduct);

export default router;
