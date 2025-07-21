import { createSlice } from "@reduxjs/toolkit";
import { templateInitialState } from "./initialState";
import * as Actions from "./actions";
export * from "./selectors";

export const templateSlice = createSlice({
    name: "template",
    initialState: templateInitialState,
    reducers:{
        setTemplateKey : Actions.setTemplateKeyAction,
        addNewQuestionType: Actions.addNewQuestionTypeAction,
        removeQuestionType: Actions.removeQuestionTypeAction,
        updateQuestionTypeData: Actions.updateQuestionTypeDataAction,
        updateQuestionTypeOptions: Actions.updateQuestionTypeOptionsAction,
        resetTemplateState: Actions.resetTemplateStateAction,
    },
});

export const {
    setTemplateKey, 
    addNewQuestionType, 
    removeQuestionType, 
    updateQuestionTypeData, 
    updateQuestionTypeOptions,
    resetTemplateState,
} = templateSlice.actions;
export default templateSlice.reducer;