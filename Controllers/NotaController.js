import { datos } from "../app.js";

class NotaController {
    async getAllNotas(req, res) {
        res.status(200).send({ success: true, message: datos })
    }

    async getNotasPorAlumno(req, res) {
        const datosAgrupados = datos.reduce((result, current) => {
            const key = `${current.nombreAlumno} ${current.apellidoAlumno}`;
            if (!result[key]) {
                result[key] = {
                    nombreAlumno: current.nombreAlumno,
                    apellidoAlumno: current.apellidoAlumno,
                    notas: []
                };
            }
            result[key].notas.push(current.nota);
            return result;
        }, {});

        const resultado = Object.values(datosAgrupados);
        res.status(200).send({ success: true, message: resultado })
    }

    async createNota(req, res) {
        let { nombreAlumno, apellidoAlumno, nota } = req.body
        if (
            !nombreAlumno ||
            !apellidoAlumno ||
            nota === undefined ||
            typeof nota !== "number" ||
            nota < 0 || nota > 10
        ) {
            res.status(409).send({ success: false, message: "Alguno de los datos para la creación de la nota es inválido" })
        } else {
            let notaNueva = {
                id: datos.length + 1,
                nombreAlumno: nombreAlumno,
                apellidoAlumno: apellidoAlumno,
                nota: nota
            }
            datos.push(notaNueva);
            res.status(201).send({
                success: true,
                message: "Nota creada con éxito " + JSON.stringify(notaNueva)
            });
        }
    }
}

export default NotaController;
