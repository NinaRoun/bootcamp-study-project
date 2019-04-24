import 'cross-fetch/polyfill';
import fetch from 'cross-fetch';
import * as types from './types';

const apiURL = "https://api.themoviedb.org/3/tv/popular?api_key=eaa4854fc14c0423809d014974235e94&language=en-US&page=1";
const errorMsg = "An error has occurred while sending the request!";

export const CriterionToSort = {
    SORT_BY_NUMBER: 'SORT_BY_NUMBER',
    SORT_BY_NAME: 'SORT_BY_NAME',
    SORT_BY_RATE: 'SORT_BY_RATE',
    SORT_BY_DATE: 'SORT_BY_DATE'
};

export const setSortingCriterion = () => (dispatch, criterion) => {
    return dispatch({
        type: types.SET_SORTING_CRITERION,
        payload: criterion
    })
};

function fetchTvshowsRequest() {
    return {
        type: types.FETCH_TVSHOWS_REQUEST
    }
}

function fetchTvshowsSuccess(body) {
    return {
        type: types.FETCH_TVSHOWS_SUCCESS,
        payload: body
    }
}

function fetchTvshowsFailure(ex) {
    console.log('error uccurred ', ex)
    return {
        type: types.FETCH_TVSHOWS_FAILURE,
        payload: errorMsg
    }
}

export function fetchTvshows() {
    return dispatch => {
        dispatch(fetchTvshowsRequest());
        return fetch(apiURL)
            .then(res => {
                return res.json()})
            .then(body => {
                return dispatch(fetchTvshowsSuccess(body.results))
            })
            .catch(ex => dispatch(fetchTvshowsFailure(ex)))
    }
}







