import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    LoginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    LoginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, LoginSuccess, LoginFailure } = userSlice.actions;
export default userSlice.reducer;
