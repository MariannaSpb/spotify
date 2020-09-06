import { combineReducers } from "redux";
import {artistsReducer, tokenReducer } from './artistsReducer';



export default combineReducers({
    artistsReducer,
    tokenReducer,
})