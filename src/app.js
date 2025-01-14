const express = require("express");
const rotas = require("./routes");
const cors = require('cors');

const app = express();
app.use(cors());
rotas(app);

module.exports = app;
