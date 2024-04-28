import Axios from "../utils/axios";

//
export const getPredictions = async () => {
  return await Axios.get("predictions");
};
export const getSortedPrediction = async (category) => {
  return await Axios.get(`predictions?category=${category}`);
};
export const getSortedCategory = async (prediction) => {
  return await Axios.get(`predictions?predictionValidation=${prediction}`);
};

export const getPredictionSingle = async (id) => {
  return await Axios.get(`predictions?userId=${id}`);
};
export const getSinglePrediction = async (id) => {
  return await Axios.get(`predictions?predictionId=${id}`);
};
