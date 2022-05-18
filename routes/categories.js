import { Router } from "express";
import { getAllCategories, getCategoryById, createCategory, deleteCategoryById, updateCategory } from "../controllers/categories.js";

export const categoriesRouter = Router();

categoriesRouter
    .route('/')
    .get(getAllCategories)
    .post(createCategory);

categoriesRouter
    .route('/:id')
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategoryById);