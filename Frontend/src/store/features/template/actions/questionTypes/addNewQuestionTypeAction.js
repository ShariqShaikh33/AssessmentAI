import { getEmptyQuestions } from "../../utils";

export const addNewQuestionTypeAction = (state, {payload}) => {
    const {questionType} = payload;
    const newQuestion = getEmptyQuestions({type: questionType});
    console.log({state});
    state.questionTypes.push(newQuestion);
}