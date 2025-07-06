import { createSlice } from "@reduxjs/toolkit";
import { templateInitialState } from "./initialState";
import * as Actions from "./actions";
export * from "./selectors";

export const templateSlice = createSlice({
    name: "template",
    initialState: templateInitialState,
    reducers:{
        setTemplateKey : Actions.setTemplateKeyAction,
    },
});

export const {setTemplateKey} = templateSlice.actions;
export default templateSlice.reducer;