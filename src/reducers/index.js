import { combineReducers } from 'redux';
import {isLoading, tvshowReducer, fetchFailure} from './tvshowReducer';

export default combineReducers({
    tvshows: tvshowReducer,
    error: fetchFailure,
    isLoading,
})
