import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000",
});

export const sendMailThunk = createAsyncThunk(
  "sendMailThunk",
  async ({ name, email, location, budget, message }, { rejectWithValue }) => {
    try {
      const res = await URL.post("/user-details", {
        name,
        email,
        location,
        budget,
        message,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Unable to send your message. Please try again later.",
      );
    }
  },
);
