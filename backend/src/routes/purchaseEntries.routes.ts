import { Router } from "express";
import { makePurchaseHandler } from "../controllers/purchaseEntry.controller";

const routes = Router();

routes.post("/", makePurchaseHandler);

export default routes