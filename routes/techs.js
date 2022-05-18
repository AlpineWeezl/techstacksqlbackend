import Router from "express";
import { createTech, deleteTechById, getAllTechs, getTechById, updateTechById } from "../controllers/techs.js";

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