const config = require("./utils/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const restaurantRouter = require("./controllers/restaurants");
const tagRouter = require("./controllers/tags");

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());

app.use("/api/restaurants", restaurantRouter);
app.use("/api/tags", tagRouter);

module.exports = app;
