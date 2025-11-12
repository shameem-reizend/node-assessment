import { Router } from "express";
import { addProductHandler, updateProductHandler } from "../controllers/product.controller";

const routes = Router();

routes.post("/", addProductHandler);
routes.put("/:productId", updateProductHandler);

export default routes;