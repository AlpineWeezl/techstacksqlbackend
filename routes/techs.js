import Router from "express";
import { createTech, getAllTechs, getTechById } from "../controllers/techs.js";

export const techsRouter = Router();

techsRouter
    .route('/')
    .get(getAllTechs);

techsRouter
    .route('/:id')
    .get(getTechById)
    .post(createTech);