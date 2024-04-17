import Axios from "../utils/axios";

//
export const userLogin = async (userInfo) => {
  return await Axios.post("/user_check", userInfo);
};
