import { QuestionTypes } from "../../../../../types";

export const getQuestionTypeOptions = (questionType = QuestionTypes.MULTIPLE_CHOICE)=>{
    switch(questionType){
        case QuestionTypes.MULTIPLE_CHOICE:
            return [
            {
              id: "includeHints",
              label: "Include Hints"
            },
            {
              id: "includeExplanations",
              label: "Include Explanation"
            },
            {
              id: "shuffleOptions",
              label: "Shuffle Options"
            },
            {
              id: "enableNegativeMarking",
              label: "Enable Negative Marking"
            },
        ]
        default:
            return [
            {
              id: "includeHints",
              label: "Include Hints"
            },
            {
              id: "includeExplanations",
              label: "Include Explanation"
            },
            {
              id: "enableNegativeMarking",
              label: "Enable Negative Marking"
            },
          ]
    }
}