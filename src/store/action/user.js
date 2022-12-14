import { UPDATE_PASSWORD, UPDATE_USER_NAME } from "../utils";

const updatUserName = (data) => {
  return {
    type: UPDATE_USER_NAME,
    payload: data,
  };
};

const updatePassword = (data) => {
  return {
    type: UPDATE_PASSWORD,
    payload: data,
  };
};

export { updatUserName, updatePassword };
