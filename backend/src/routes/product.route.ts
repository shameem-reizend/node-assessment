import { Router } from "express";
import { addProductHandler, fetchAllProductHandler, fetchOneProductHandler, removeProductHandler, updateProductHandler } from "../controllers/product.controller";

const routes = Router();

routes.post("/", addProductHandler);
routes.put("/:productId", updateProductHandler);
routes.delete("/:productId", removeProductHandler);
routes.get("/all", fetchAllProductHandler);
routes.get("/:productId", fetchOneProductHandler);

export default routes;