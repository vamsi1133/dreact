import { GET_PROFILES } from "../utils";

const initialState = [];

const profileReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case GET_PROFILES:
      return [...state, ...data];
    default:
      return state;
  }
};

export default profileReducer;
