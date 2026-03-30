import express from "express";
import multer from "multer";
import { uploadFood, getFoods } from "../controllers/foodController.js";
import { protect } from "../middleware/authMiddleware.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/upload", protect, upload.single("image"), uploadFood);
router.get("/", protect, getFoods);

export default router;