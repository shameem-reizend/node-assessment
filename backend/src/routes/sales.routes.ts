import { Router } from "express";
import { fetchAllSalesHandler, fetchSaleByIdHandler, fetchSaleItemBySaleIdHandler, makeSalesHandler } from "../controllers/sales.controller";

const routes = Router();

routes.post("/", makeSalesHandler);
routes.get("/", fetchAllSalesHandler);
routes.get("/:saleId", fetchSaleByIdHandler);
routes.get("/saleItems/:saleId", fetchSaleItemBySaleIdHandler);

export default routes;