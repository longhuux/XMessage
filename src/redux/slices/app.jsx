import { createSlice } from "@reduxjs/toolkit";

//
// import { dispatch } from "../store";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT", //can be contact, starred, shared
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //toogle sidebar
    toogleSideBar(state, action) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSidebarType(state, action) {
      state.sideBar.type = action.payload;
    },
  },
});

export default slice.reducer;

export function ToogleSideBar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toogleSideBar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSidebarType({
        type,
    }));
  };
}
