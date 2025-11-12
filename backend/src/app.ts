import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.route"
import purchaseRoutes from "./routes/purchaseEntries.routes"

const app = express();
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/purchase", purchaseRoutes)

app.use(errorHandler);


export default app;
