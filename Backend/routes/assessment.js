import { Router } from "express";
import { createAssessment, createAssessmentFromUI, deleteAssessmentById, getAllAssessment, getAssessmentById } from "../controllers/index.js";
export const assessmentRouter = Router();

assessmentRouter.get("/", getAllAssessment);
assessmentRouter.post("/",createAssessment);
assessmentRouter.post("/ai",createAssessmentFromUI);
assessmentRouter.get("/:id", getAssessmentById);
assessmentRouter.delete("/:id", deleteAssessmentById);
