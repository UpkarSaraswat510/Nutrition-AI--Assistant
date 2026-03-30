import axios from "axios";

export const analyzeFood = async (imagePath) => {
  try {
    // Replace with OpenAI Vision API
    return {
      name: "Pizza",
      calories: 285,
      protein: 12,
      carbs: 36,
      fats: 10,
    };
  } catch (err) {
    return {
      name: "Unknown Food",
      calories: 200,
      protein: 5,
      carbs: 20,
      fats: 8,
    };
  }
};