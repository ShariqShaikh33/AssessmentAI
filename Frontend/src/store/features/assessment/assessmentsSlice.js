import { createSlice } from "@reduxjs/toolkit";
import {assessmentsInitialState } from "./initialState";
import * as Actions from "./actions";
export * from "./selectors";

export const assessmentsSlice = createSlice({
    name: "assessments",
    initialState: assessmentsInitialState,
    reducers:{
        setAssessmentsKey : Actions.setAssessmentsKeyAction,
        resetAssessmentState: Actions.resetAssessmentStateAction,
        setAssessment: Actions.setAssessmentAction,
    },
});

export const {setAssessmentsKey, resetAssessmentState, setAssessment} = assessmentsSlice.actions;
export default assessmentsSlice.reducer;