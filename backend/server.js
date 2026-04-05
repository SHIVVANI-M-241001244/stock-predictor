const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Connect to MongoDB Atlas
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/stockRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));