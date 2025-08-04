import { Template } from "../models/index.js";
import {GoogleGenAI} from '@google/genai';
import {config} from "dotenv";
import { questionsListResponseSchema } from "../ai/helpers/questionListResponseSchema.js";
import { getQuestionListGenerationPrompt } from "../ai/prompts/getQuestionListGenerationPrompt.js";
config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export const createAssessmentQuestions = async (assessment) =>{
    console.log("Creating Assessment using AI");
        
    const {template: templateObjectId} = assessment;
    const templateId = templateObjectId.toString();
    console.log("templateId", templateId);
    if(!templateId) return;

    const template = await Template.findById(templateId);
    console.log("template", template);
    if(!template) return;

    const prompt = getQuestionListGenerationPrompt(assessment, template);
    console.log("Prompt: ",prompt);

    try{
        const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: prompt,
        config:{
            responseMimeType: "application/json",
            responseSchema: questionsListResponseSchema,
        }
        });
    
        console.log("Response from AI");
    
        const questions = JSON.parse(response.text);
        return questions;
    }
    catch(error){
        throw new Error("Failed to create questions from AI",{
            cause: error,
        })
    }
};