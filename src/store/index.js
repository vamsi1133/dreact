import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/profile";
import thunk from "redux-thunk";
import userReducer from "./reducer/user";

const reducer = {
  user: userReducer,
  profiles: profileReducer,
};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
