import { combineReducers } from "@reduxjs/toolkit";
import betslipReducer from "./betslip/reducer";
const rootReducer = combineReducers({
  betslip: betslipReducer,
});

export default rootReducer;
