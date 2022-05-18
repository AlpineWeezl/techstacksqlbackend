import { Router } from "express";
import { getAllCategories, getCategoryById } from "../controllers/categories.js";

export const categoriesRouter = Router();

categoriesRouter.route('/').get(getAllCategories);
categoriesRouter.route('/:id').get(getCategoryById);