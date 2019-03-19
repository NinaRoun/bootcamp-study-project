import { combineReducers } from 'redux'
import tvshowReducer from './tvshowReducer'

export default combineReducers({
    tvshows: tvshowReducer
})
