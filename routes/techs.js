import Router from "express";
import { getAllTechs, getTechById } from "../controllers/techs";

export const techsRouter = Router();

techsRouter
    .route('/')
    .get(getAllTechs);

techsRouter
    .route('/:id')
    .get(getTechById);