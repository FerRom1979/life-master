import { createSlice } from "@reduxjs/toolkit";

export type MessagesState = {
  isMessage: boolean;
  message: string;
  typeMessage: "error" | "success" | "warning" | undefined;
};

const initialState: MessagesState = {
  isMessage: false,
  message: "",
  typeMessage: undefined,
};

const name = "errors";

export const errorsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMessage(state, action) {
      state.isMessage = true;
      state.message = action.payload.message;
      state.typeMessage = action.payload.type;
    },
    resetMessage(state) {
      state.isMessage = false;
      state.message = "";
      state.typeMessage = undefined;
    },
  },
  extraReducers: () => {},
});

export const { setMessage, resetMessage } = errorsSlice.actions;

export default errorsSlice.reducer;
