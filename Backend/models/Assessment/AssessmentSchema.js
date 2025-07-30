import { model, Schema } from "mongoose";
import { AssessmentStatusEnum } from "../../types";
import { BaseQuestionSchema } from "./BaseQuestionSchema";

const AssessmentSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    template:{
        type: Schema.Types.ObjectId,
        ref: "Template",
        required: true,
    },
    status:{
        type: String,
        enum: Object.values(AssessmentStatusEnum),
        required: true,
    },
    publishedAt:{
        type: Date,
    },
    totalMarks: {
        type: Number,
    },
    questions:{
        type: [BaseQuestionSchema],
        required: true,
    }
},
{
    timestamps: true,
});

AssessmentSchema.path("questions")

export const Assessment = model("Assessment", AssessmentSchema);