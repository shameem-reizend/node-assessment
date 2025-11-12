import { Router } from "express";
import { makeSalesHandler } from "../controllers/sales.controller";

const routes = Router();

routes.post("/", makeSalesHandler);

export default routes;