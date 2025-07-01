import { createSlice } from "@reduxjs/toolkit";
import { commonInitialState } from "./initialState";
import * as Actions from "./actions";
export * from "./selectors";

const commonslice = createSlice({
  name: "teacher-common",
  initialState:commonInitialState,
  reducers:{
    toggleSidebar : Actions.toggleSidebarAction,
    setCommonKey: Actions.setCommonKeyAction,
  },
});

export const {toggleSidebar, setCommonKey} = commonslice.actions;
export default commonslice.reducer;