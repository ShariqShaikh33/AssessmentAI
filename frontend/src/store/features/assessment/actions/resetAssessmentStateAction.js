import { assessmentsInitialState} from "../initialState"

export const resetAssessmentStateAction=(state)=>{
    Object.assign(state, assessmentsInitialState);
}