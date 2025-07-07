import { DifficultyLevelTypes, QuestionTypes } from "../../../../types";

export const getEmptyQuestions=(type = QuestionTypes.MULTIPLE_CHOICE) => {
    return {
        type,
        data:{
            label: "",
            questionCount: 0,
            marksPerQuestion: 0,
            difficultyLevel: DifficultyLevelTypes.EASY,
            customPrompt: "",
            options: {
                includeHints: false,
                includeExplanations: false,
                shuffleOptions: false,
                enableNegativeMarking: false,
                negativeScore: 0,
            }
        }
    }
}
