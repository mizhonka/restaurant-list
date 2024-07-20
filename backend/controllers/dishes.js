const dishRouter = require("express").Router();
const Dish = require("../models/dish");

dishRouter.get("/", async (request, response) => {
  const dishes = await Dish.find({})
    .populate("restaurant", { name: 1 })
    .populate("tag", { title: 1 });
  response.json(dishes);
});

dishRouter.post("/", async (request, response) => {
  const body = request.body;
  const dish = Dish(body);
  try {
    const newDish = await dish.save();
    response.status(201).json(newDish);
  } catch (expection) {
    console.log(expection);
  }
});

module.exports = dishRouter;
