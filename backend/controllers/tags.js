const tagRouter = require("express").Router();
const Tag = require("../models/tag");

tagRouter.get("/", async (request, response) => {
  const tags = await Tag.find({});
  response.json(tags);
});

tagRouter.post("/", async (request, response) => {
  const body = request.body;
  const tag = Tag(body);
  try {
    const newTag = tag.save();
    response.status(201).json(newTag);
  } catch (expection) {
    console.log(expection);
  }
});

module.exports = tagRouter;
