import Axios from "../utils/axios";

//
export const getEmail = async (emailVal) => {
  return await Axios.post("email", { email: emailVal });
};
