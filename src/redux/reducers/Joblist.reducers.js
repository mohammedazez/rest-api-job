import {
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_FAILED,
  GET_JOB_DETAIL_REQUEST,
  GET_JOB_DETAIL_SUCCESS,
  GET_JOB_DETAIL_FAILED,
} from "../actions/Joblist.actions";

const intialstate = {
  job: [],
  jobdetail: {},
  loading: false,
  error: null,
};

export default function joblist(state = intialstate, action) {
  switch (action.type) {
    case GET_ALL_JOB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        job: action.payload,
      };
    case GET_ALL_JOB_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_JOB_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        jobdetail: action.payload,
      };
    case GET_JOB_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
