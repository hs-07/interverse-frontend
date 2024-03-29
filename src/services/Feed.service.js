import Axios from "../utils/feed-axios";

export const getFeedDetails = async () => {
  return await Axios.get(`predictions`);
};
