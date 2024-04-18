import Axios from "../utils/axios";

//
export const channelsData = async () => {
  return await Axios.get("channel_data");
};
export const addRemoveFavourite = async (params) => {
  const res = await Axios.post("toggle-favorite-channel", params);
  console.log(res.data);
  return res.data;
};
