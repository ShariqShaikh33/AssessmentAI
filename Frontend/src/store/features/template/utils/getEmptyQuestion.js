import { DifficultyLevelTypes, QuestionTypes } from "../../../../types";

export const getEmptyQuestions=(type) => {
    return {
        type,
        data:{
            label: "",
            questionCount: 5,
            marksPerQuestion: 2,
            difficultyLevel: DifficultyLevelTypes.EASY,
            customPrompt: "",
            options: {
                includeHints: false,
                includeExplanations: false,
                shuffleOptions: false,
                enableNegativeMarking: false,
            }
        }
    }
}
