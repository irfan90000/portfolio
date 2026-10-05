import { createSlice } from "@reduxjs/toolkit";
import { sendMailThunk } from "../Thunks/sendMailThunk";

const sendMailSlice = createSlice({
  name: "sendMail",
  initialState: {
    data: [],
    error: false,
    pending: false,
  },
  extraReducers: (builder) => {
    (builder.addCase(sendMailThunk.rejected, (state) => {
      state.pending = false;
      state.error = true;
    }),
      builder.addCase(sendMailThunk.pending, (state) => {
        state.error = false;
        state.pending = true;
      }),
      builder.addCase(sendMailThunk.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.data = action.payload;
      }));
  },
});
export default sendMailSlice.reducer;
