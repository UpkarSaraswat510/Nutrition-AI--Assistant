import Food from "../models/Food.js";
import { analyzeFood } from "../utils/ai.js";

export const uploadFood = async (req, res) => {
  const image = req.file.path;

  const result = await analyzeFood(image);

  const food = await Food.create({
    userId: req.user.id,
    image,
    ...result,
  });

  res.json(food);
};

export const getFoods = async (req, res) => {
  const foods = await Food.find({ userId: req.user.id });
  res.json(foods);
};