const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookiePraser = require("cookie-parser");

const app = express();

const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.router");
const mapRoutes = require("./routes/maps.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePraser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes);

module.exports = app;
