import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import {getReducer} from './getReducers'

export default combineReducers({
    post: postReducer,
    get: getReducer
})