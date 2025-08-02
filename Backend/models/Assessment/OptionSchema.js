import { Schema } from "mongoose";
import { QuestionTypeEnum } from "../../types/index.js";

export const OptionSchema = new Schema({
    label: {
        type: String,
        enum: Object.values(QuestionTypeEnum),
        required: true,
    },
    isCorrect:{
        type: Boolean,
        default: false,
    },
},
{
    _id: false,
}
);