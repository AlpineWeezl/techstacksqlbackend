import Router from "express";
import { getAllTechs } from "../controllers/techs";

export const techsRouter = Router();

techsRouter
    .route('/')
    .get(getAllTechs);

techsRouter
.route('/:id')
.get();