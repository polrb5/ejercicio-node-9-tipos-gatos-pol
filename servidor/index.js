const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");

app.use(morgan("dev"));
app.use(express.json());

app.use(error404);
app.use(errorGeneral);
