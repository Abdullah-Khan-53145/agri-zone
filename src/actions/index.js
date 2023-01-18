import { SET_COLOR } from "./actionTypes";

// action for setting the color

export const setColor = (payload) => ({
  type: SET_COLOR,
  payload: payload,
});

// Set color API
export const setColorAPI = (payload) => {
  console.log(payload);
  return (dispatch) => {
    dispatch(setColor(payload));
  };
};
