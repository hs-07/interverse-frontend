import Axios from "../utils/axios";

export const getMarket = async () => {
  return await Axios.get("markets");
};

export const getMarketGraph = async (id) => {
  return await Axios.get(
    `https://fierce-plateau-07706-389d9b27b69c.herokuapp.com/markets?eventTicker=${id}`
  );
};
