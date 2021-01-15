import axios from "axios";
export const GET_ALL_JOB_REQUEST = "GET_ALL_JOB_REQUEST";
export const GET_ALL_JOB_SUCCESS = "GET_ALL_JOB_SUCCCES";
export const GET_ALL_JOB_FAILED = "GET_ALL_JOB_FAILED";
export const GET_JOB_DETAIL_REQUEST = "GET_JOB_DETAIL_REQUEST";
export const GET_JOB_DETAIL_SUCCESS = "GET_JOB_DETAIL_SUCCESS";
export const GET_JOB_DETAIL_FAILED = "GET_JOB_DETAIL_FAILED";

export const getJobAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_JOB_REQUEST,
      });
      const response = await axios.get(
        "https://jobs.github.com/positions.json"
      );
      dispatch({
        type: GET_ALL_JOB_SUCCESS,
        payload: response.data.joblist,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_JOB_FAILED,
        payload: error,
      });
    }
  };
};

export const getJobById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_JOB_DETAIL_REQUEST,
      });
      const response = await axios.get(
        `https://jobs.github.com/positions/${id}.json`
      );
      dispatch({
        type: GET_JOB_DETAIL_SUCCESS,
        payload: response.data.joblist,
      });
    } catch (error) {
      dispatch({
        type: GET_JOB_DETAIL_FAILED,
        payload: error,
      });
    }
  };
};
