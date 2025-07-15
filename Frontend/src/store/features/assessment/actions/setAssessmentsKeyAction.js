export const setAssessmentsKeyAction = (state, {payload}) => {
    const {key, value} = payload;
    state[key] = value;
}