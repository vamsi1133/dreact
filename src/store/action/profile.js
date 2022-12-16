import https from "../../http";
import { GET_PROFILES } from "../utils";

const fetchProfileAction = () => {
  return async (dispatch) => {
    const res = await https.get("/profile");
    const { data } = res;
    dispatch({ type: GET_PROFILES, payload: data });
  };
};

export { fetchProfileAction };
