const express = require("express");
const app = express();

const path = require("path");
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/templates/index.html"))
})

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Servidor abierto en el puerto 8080")

//Minuto 46