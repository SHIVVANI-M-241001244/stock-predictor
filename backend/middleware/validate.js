module.exports = (req, res, next) => {
  const { name, price, date } = req.body;

  if (!name || !price || !date) {
    return res.status(400).json({ msg: "All fields required" });
  }

  if (isNaN(price)) {
    return res.status(400).json({ msg: "Price must be number" });
  }

  next();
};