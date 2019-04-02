import { combineReducers } from 'redux'
import {isLoading, tvshowReducer, fetchFailure} from './tvshowReducer'
//import SortingCriterion from "./SortingCriterion";


export default combineReducers({
    tvshows: tvshowReducer,
    error: fetchFailure,
    isLoading,
})
