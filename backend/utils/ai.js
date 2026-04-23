import axios from "axios";

export const analyzeFood = async (imagePath) => {
  try {
    // Simulated CNN Food Recognition
    const foods = [
      { name: "Grilled Chicken Salad", calories: 380, protein: 35, carbs: 18, fats: 12 },
      { name: "Pasta Carbonara", calories: 650, protein: 25, carbs: 75, fats: 28 },
      { name: "Avocado Toast", calories: 320, protein: 8, carbs: 24, fats: 22 },
      { name: "Salmon with Asparagus", calories: 450, protein: 40, carbs: 10, fats: 28 },
      { name: "Fruit Smoothie Bowl", calories: 290, protein: 5, carbs: 55, fats: 4 },
      { name: "Vegetable Stir Fry", calories: 210, protein: 6, carbs: 32, fats: 8 }
    ];

    // Simulate model inference delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Randomly select a food to simulate recognition
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    
    return {
      ...randomFood,
      suggestions: [
        "Drink plenty of water with this meal",
        "Excellent choice for a balanced diet",
        "Consider adding more greens"
      ]
    };
  } catch (err) {
    return {
      name: "Unknown Food",
      calories: 200,
      protein: 5,
      carbs: 20,
      fats: 8,
      suggestions: ["Try uploading a clearer image"]
    };
  }
};