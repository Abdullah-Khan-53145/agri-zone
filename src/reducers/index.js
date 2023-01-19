import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";
import userReducer from "./userReducer";
const reducer = combineReducers({
  userState: userReducer,
  colorState: setColorReducer,
});

export default reducer;
