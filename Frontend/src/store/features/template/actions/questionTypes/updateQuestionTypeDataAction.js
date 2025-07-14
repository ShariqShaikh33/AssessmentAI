

export const updateQuestionTypeDataAction = (state, {payload})=>{
    const {index, key, value} = payload;  
    if(!state.questionTypes[index]) return 
    state.questionTypes[index].data[key] = value;
}