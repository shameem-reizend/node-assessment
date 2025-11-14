import { Router } from "express";
import { fetchPurchaseHandler, makePurchaseHandler } from "../controllers/purchaseEntry.controller";

const routes = Router();

routes.post("/", makePurchaseHandler);
routes.get("/", fetchPurchaseHandler);

export default routes