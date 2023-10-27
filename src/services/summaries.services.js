import Axios from "../utils/axios";

export const allSummarySources = async () => {
  return await Axios.get("all-sources");
};

export const getSummaryPeople = async (id) => {
  return await Axios.get(`summaries_people?sourceId=${id}`);
};

export const getSummaryPrediction = async (id) => {
  return await Axios.get(`summaries_predictions?sourceId=${id}`);
};

export const getSummarySummaries = async (id) => {
  return await Axios.get(`summaries_summaries?sourceId=${id}`);
};

export const getFullTranscript = async (id) => {
  return await Axios.get(`summaries_transcript?sourceId=${id}`);
};
