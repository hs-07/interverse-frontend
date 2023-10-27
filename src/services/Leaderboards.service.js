import Axios from "../utils/axios";

//
export const leaderBoardData = async () => {
  return await Axios.get("prediction-leaderboard");
};
