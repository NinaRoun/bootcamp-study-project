import { combineReducers } from 'redux';
import { tvshowReducer } from './tvshowReducer';

export default combineReducers({
    tvshowsData: tvshowReducer,
})
