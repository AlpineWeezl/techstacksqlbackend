import Router from "express";
import { createTech, deleteTechById, getAllTechs, getTechById, getTechsByCategoryId, updateTechById } from "../controllers/techs.js";

export const techsRouter = Router();

techsRouter
    .route('/')
    .get(getAllTechs)
    .post(createTech);

techsRouter
    .route('/:id')
    .get(getTechById)
    .put(updateTechById)
    .delete(deleteTechById);

techsRouter
    .route('/category/:cat_id')
    .get(getTechsByCategoryId)