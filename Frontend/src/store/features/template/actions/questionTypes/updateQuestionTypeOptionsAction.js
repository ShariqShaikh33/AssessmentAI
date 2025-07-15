
export const updateQuestionTypeOptionsAction = (state, {payload})=>{
    const {index, key, value} = payload;
    if(!state.questionTypes[index]) return
    state.questionTypes[index].data.options[key] = value;
}