import { SET_COLOR, SET_USER } from "./actionTypes";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

// action for setting the color

export const setColor = (payload) => ({
  type: SET_COLOR,
  payload: payload,
});
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Set color API
export const setColorAPI = (payload) => {
  console.log(payload);
  return (dispatch) => {
    dispatch(setColor(payload));
  };
};

export function SignInWithGoogleAPI() {
  return async (dispatch) => {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    console.log(result.user);
  };
}

export function SignInWithEmailPasswordAPI(user) {
  return async (dispatch) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  };
}

export function SignOutAPI() {
  return async (dispatch) => {
    localStorage.setItem("user", null);
    dispatch(setUser(null));
    await signOut(auth);
  };
}
