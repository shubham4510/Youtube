import { createSlice } from '@reduxjs/toolkit';

const toggleSideBar = createSlice({
    name: "toggleSideBar",
    initialState: {
        toggle: true,
    },
    reducers: {
        isOpen: (state) => {
            return {
                toggle: !state.toggle,
            };
        },
    },
});

export const { isOpen } = toggleSideBar.actions;

export default toggleSideBar.reducer;
