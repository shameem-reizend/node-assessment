import { Router } from "express";
import { fetchAllSalesHandler, makeSalesHandler } from "../controllers/sales.controller";

const routes = Router();

routes.post("/", makeSalesHandler);
routes.get("/", fetchAllSalesHandler);

export default routes;