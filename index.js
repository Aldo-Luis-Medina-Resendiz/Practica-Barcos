const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/index.html"));
});

router.get("/contacto", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/contacto.html"));
});

router.get("/perfil", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/perfil.html"));
});

router.post("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/doc.xslx"));
});

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Servidor abierto en el puerto 8080");
