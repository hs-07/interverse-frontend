import Axios from "../utils/axios";

//
export const channelsData = async () => {
  return await Axios.get("channel_data");
};
