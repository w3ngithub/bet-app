import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   addToBetSlip,
//   removeFromBetSlip,
//   updateBetSlipQuantity,
// } from "./actions";

type InitialStateTypes = { data?: {}; isOpen: boolean };
const initialState = {
  data: [],
  isOpen: false,
  length: 0,
} as InitialStateTypes;

export const betSlipSlice = createSlice({
  name: "betSlip",
  initialState,
  reducers: {
    openBetSlip: (state: any, action: PayloadAction<InitialStateTypes>) => {
      state.data = action.payload.data;
      state.isOpen = action.payload.isOpen;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(otherAction, (state, action) => { /* update state */ });
  },
});

export const { openBetSlip } = betSlipSlice.actions;
export default betSlipSlice.reducer;
