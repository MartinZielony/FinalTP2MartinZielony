import { Router } from "express";
import notaRoute from "./notaRoute.js";

const routes = Router();
routes.use("/nota", notaRoute);

export default routes; 