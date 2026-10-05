import { configureStore } from "@reduxjs/toolkit";
import sendMailReducer from "../Slices/sendMailSlice.jsx";
export const store = configureStore({
  reducer: {
    sendMail: sendMailReducer,
  },
});
