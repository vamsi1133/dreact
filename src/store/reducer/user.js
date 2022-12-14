import { UPDATE_USER_NAME, UPDATE_PASSWORD, UPDATE_CREDENTIAL } from "../utils";

const initialState = {
  username: "vamsi",
  password: "",
};

const userReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case UPDATE_USER_NAME:
      return { ...state, username: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case UPDATE_CREDENTIAL:
      return { ...state, ...data };
    default:
      return state;
  }
};

export default userReducer;
