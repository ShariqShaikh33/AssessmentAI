import { getEmptyQuestions } from "../../utils";

export const addNewQuestionTypeAction = (state, {payload}) => {
    const {questionType} = payload;
    const newQuestion = getEmptyQuestions(questionType);
    state.questionTypes.push(newQuestion);
}