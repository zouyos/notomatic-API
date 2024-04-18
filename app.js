const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const noteRoutes = require("./routes/note");
const userRoutes = require("./routes/user");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/note", noteRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
