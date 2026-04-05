// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/stocksDB");

app.use("/api", require("./routes/stockRoutes"));

app.listen(5000, () => console.log("Backend running"));