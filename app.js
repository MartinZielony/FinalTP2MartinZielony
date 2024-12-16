import express from "express"
import routes from "./Routes/routes.js"

const app = express();

const datos = [
    { id: 1, nombreAlumno: "Martin", apellidoAlumno: "Zielony", nota: 8 },
    { id: 2, nombreAlumno: "Juana", apellidoAlumno: "Ramirez", nota: 7 },
    { id: 3, nombreAlumno: "Martin", apellidoAlumno: "Zielony", nota: 9 },
    { id: 4, nombreAlumno: "Juana", apellidoAlumno: "Ramirez", nota: 6 },
    { id: 5, nombreAlumno: "Pablo", apellidoAlumno: "Lopez", nota: 10 }
];

app.use(express.json())
app.use(routes)

app.listen(8081, () => {
    console.log(`Server running at http://localhost:8081`);
});

export { app, datos }; 