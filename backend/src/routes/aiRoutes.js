import express from "express";
import {generateRecommendation} from "../controllers/aiController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/recommend", protect, generateRecommendation);

export default router;