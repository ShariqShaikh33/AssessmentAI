
export const updateQuestionTypeOptionsAction = (state, {payload})=>{
    const {index, key, value} = payload;
    const questionType = state.QuestionTypes[index];
    state.questionTypes.data.options[key] = value;
}