import Axios from "../utils/axios";

//
export const getPredictions = async () => {
  return await Axios.get("predictions");
};

export const getPredictionSingle = async (id) => {
  return await Axios.get(`predictions?userId=${id}`);
};
