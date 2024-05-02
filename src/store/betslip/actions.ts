import { createAction } from "@reduxjs/toolkit";
//dummy actions --- currently not used
export const addToBetSlip = createAction<string>("betslip/addToBetSlip");
export const removeFromBetSlip = createAction<string>(
  "betslip/removeFromBetSlip"
);
export const updateBetSlipQuantity = createAction<{
  itemId: string;
  quantity: number;
}>("betslip/updateBetSlipQuantity");
