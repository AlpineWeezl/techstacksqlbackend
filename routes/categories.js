import { Router } from "express";
import { getAllCategories, getCategoryById, createCategory, deleteCategoryById, updateCategory } from "../controllers/categories.js";

export const categoriesRouter = Router();

const error = () => {
    return({
         message: 'Opps, something went wrong!'
     });
 };

categoriesRouter
    .route('/')
    .get(getAllCategories)
    .post(createCategory)
    .all(error);

categoriesRouter
    .route('/:id')
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategoryById)
    .all(error);