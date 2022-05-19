import Router from "express";
import { createTech, deleteTechById, getAllTechs, getTechById, getTechsByCategoryId, updateTechById } from "../controllers/techs.js";

export const techsRouter = Router();
const error = () => {
   return({
        message: 'Opps, something went wrong!'
    });
};

techsRouter
    .route('/')
    .get(getAllTechs)
    .post(createTech)
    .all(error);

techsRouter
    .route('/:id')
    .get(getTechById)
    .put(updateTechById)
    .delete(deleteTechById)
    .all(error);

techsRouter
    .route('/category/:cat_id')
    .get(getTechsByCategoryId)
    .all(error);