import { combineReducers } from "redux";

import {getReducer} from './getReducers'

export default combineReducers({
    
    get: getReducer
})