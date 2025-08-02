import { Assessment} from "../models/index.js";
import { createAssessmentQuestions } from "../utils/index.js";

export const createAssessmentFromUI = async(req,res,next)=>{
try{
    const assessment = new Assessment(req.body);
    const questions = await createAssessmentQuestions(assessment);
    const totalMarks = questions.reduce(
            (acc,val)=> acc+(val.marks ?? 0),
            0,
        );
    assessment.totalMarks = totalMarks;
    await assessment.save();

    return res.status(201).json({
        success: true,
        assessment,
    });
}
catch(e){
    const error = new Error("Failed to create from UI",{
        cause: e,
    });
}
};

export const createAssessment = async (req,res,next)=>{
    try{
        const {questions=[]} = req.body;
        const totalMarks = questions.reduce(
            (acc,val)=> acc+(val.marks ?? 0),
            0,
        );

        const assessment = new Assessment(req.body);
        assessment.totalMarks = totalMarks;
        
        await assessment.save();

        return res.status(201).json({
            success: true,
            assessment,
        });
    }
    catch (e){
        const error = new Error("Failed to create assessment", {
            cause: e,
        });
        return next(error);
    }
}

export const getAllAssessment = async (req,res,next)=>{
    try {
        const assessments = await Assessment.find({}).populate("template");
    
        return res.status(200).json({
            success: true,
            data: assessments,
        });
    }
    catch (e){
        const error = new Error("Failed to fetch assessments", {
            cause: e,
        });
        return next(error);
    }
};

export const getAssessmentById = async (req,res,next)=>{
    try {
        const {id} = req.params;

        if(!id){
            const error = new Error("Assessment ID is required", {
                cause: new Error("Assessment ID is required"),
            });
            return next(error);
        }
        const assessment = await Assessment.findById(id);
    
        return res.status(200).json({
            success: true,
            data: assessment,
        });
    }
    catch (e){
        const error = new Error("Failed to fetch assessment by ID", {
            cause: e,
        });
        return next(error);
    }
};

export const deleteAssessmentById = async (req,res,next)=>{
    try {
        const {id} = req.params;

        if(!id){
            const error = new Error("Assessment ID is required", {
                cause: new Error("Assessment ID is required"),
            });
            return next(error);
        }
        const assessment = await Assessment.findByIdAndDelete(id);
    
        return res.status(200).json({
            success: true,
            data: assessment,
        });
    }
    catch (e){
        const error = new Error(`Failed to delete assessment by ID: ${id}`, {
            cause: e,
        });
        return next(error);
    }
}