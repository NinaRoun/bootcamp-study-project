import { combineReducers } from 'redux'
import tvshowReducer from './tvshowReducer'
import SortingCriterion from "./SortingCriterion";

export default combineReducers({
    tvshows: tvshowReducer,
    SortingCriterion
})
