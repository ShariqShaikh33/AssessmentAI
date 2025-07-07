

export const updateQuestionTypeDataAction = ()=>{
    const {index, key, value} = payload;
    const questionType = state.QuestionTypes[index];
    state.questionTypes.data[key] = value;
}