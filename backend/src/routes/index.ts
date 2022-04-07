import { Router } from "express";
import * as FeesController from "../controllers/FeesController";

const router = Router();

router.get("/values", FeesController.get);

export default router;