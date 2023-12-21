import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Searchz from "./searchService";

const initialState = {
  data: null,
  isSuccess: false,
  isError: false,
  message: "",
};

export const search = createAsyncThunk("search", async (query) => {
  try {
    const response = await Searchz(query);
    if (!response) {
      console.log("ERROR");
    }
    return response.data;
  } catch (error) {
    console.log("ERROR");
  }
});

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.data = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.data = action.payload;
        state.message = "Successfull";
      })
      .addCase(search.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
const { reset } = searchSlice.actions;
export default searchSlice.reducer;
