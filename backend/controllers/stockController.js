// controllers/stockController.js
const Stock = require("../models/Stock");
const { getLiveStock } = require("../services/stockService");

// LIVE STOCK
exports.getLive = async (req, res) => {
  const data = await getLiveStock(req.params.symbol);
  res.json(data);
};

// CRUD
exports.createStock = async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.json(stock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStocks = async (req, res) => {
  res.json(await Stock.find());
};

exports.updateStock = async (req, res) => {
  res.json(await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteStock = async (req, res) => {
  await Stock.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
exports.getLive = async (req, res) => {
  try {
    const data = await getLiveStock(req.params.symbol);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};