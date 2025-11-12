import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.route";
import purchaseRoutes from "./routes/purchaseEntries.routes";
import salesRoutes from "./routes/sales.routes";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/purchase", purchaseRoutes);
app.use("/api/v1/sales", salesRoutes);

app.use(errorHandler);


export default app;
