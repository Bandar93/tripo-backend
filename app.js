const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const tripRoutes = require("./apis/trips/trips.routers");

// express and DB
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/trips", tripRoutes);

// Errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use(errorHandler);

// Port
const PORT = 8000;
app.listen(PORT, () => console.log(`its Working ${PORT}`));
