export const toggleSidebarAction = (state, action) => {
    state.isSidebarOpen = action.payload ?? !state.isSidebarOpen;
}