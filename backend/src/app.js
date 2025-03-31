const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const aiRoutes = require("./routes/ai.routes");

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/ai", aiRoutes);

module.exports = app;
