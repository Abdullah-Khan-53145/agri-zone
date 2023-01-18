import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";
const reducer = combineReducers({
  colorState: setColorReducer,
});

export default reducer;
