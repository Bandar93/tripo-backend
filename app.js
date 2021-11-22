const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const tripRoutes = require("./apis/trips/trips.routes");
const userRoutes = require("./apis/user/user.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const path = require("path");

// express and DB
const app = express();
connectDB();

//passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api/trips", tripRoutes);
app.use("/api/", userRoutes);

// Errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use(errorHandler);

// Port
const PORT = 8000;
app.listen(PORT, () => console.log(`its Working ${PORT}`));
