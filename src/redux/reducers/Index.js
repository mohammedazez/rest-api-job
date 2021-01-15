import { combineReducers } from "redux";
import joblist from "../redux/reducers/Joblist.reducers";

const rootReducers = combineReducers({
  joblist,
});

export default rootReducers;
