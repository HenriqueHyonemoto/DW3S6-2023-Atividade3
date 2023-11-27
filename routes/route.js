const express = require("express");
const routerApp = express.Router();

const appPresenca = require("../controller/ctlHsort");

routerApp.get("/", appPresenca.hello);
routerApp.post("/ordenaVetor", appPresenca.ordenaVetor);
routerApp.post("/menorMaior", appPresenca.menorMaior);

module.exports = routerApp;