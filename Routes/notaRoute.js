import { Router } from "express";
import NotaController from "../Controllers/NotaController.js";
const notaController = new NotaController();
const notaRoute = Router();

notaRoute.post("/", notaController.createNota);
notaRoute.get("/", notaController.getAllNotas);
notaRoute.get("/alumnos", notaController.getNotasPorAlumno);

export default notaRoute;