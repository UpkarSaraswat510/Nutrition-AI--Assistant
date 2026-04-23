import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: String,
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
  suggestions: [String],
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);