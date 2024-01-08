import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  return data.id;
});

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});
export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
