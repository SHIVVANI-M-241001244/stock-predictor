// models/Stock.js
const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  name: String,
  price: Number,
  date: Date
});

StockSchema.index({ name: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Stock", StockSchema);