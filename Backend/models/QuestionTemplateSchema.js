import {Schema} from 'mongoose'
import { QuestionTemplateMetadataSchema } from './QuestionTemplateMetadataSchema'
import { QuestionDifficultyEnum, QuestionTypeEnum } from "../types";

export const QuestionTemplateSchema = new Schema(
    {
    type: {
        type: String,
        enum: Object.values(QuestionTypeEnum),
        required: true,
    },
    questionCount: {
        type: Number,
        required: true,
        min: 1,
    },
    marksPerQuestion: {
        type: Number,
        required: true,
        min: 0,
    },
    difficultyLevel: {
        type: String,
        enum: Object.values(QuestionDifficultyEnum),
        required: true,
    },
    customPrompt: {
        type: String,
    },
    metadata:{
        type: [QuestionTemplateMetadataSchema],
        required: true,
    }
}
)