import {combineReducers} from 'redux';
import joblist from "../redux/reducers/Joblist.reducers";
import detail from "../redux/reducers/Detail.reducers"

const rootReducers = combineReducers ({
    joblist,
    detail,
})

export default rootReducers;