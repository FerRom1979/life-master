/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

const name = "user";

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
