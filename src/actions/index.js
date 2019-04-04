import * as types from '../actions/types';
import axios from 'axios';

const apiURL = "https://api.themoviedb.org/3/tv/popular?api_key=eaa4854fc14c0423809d014974235e94&language=en-US&page=1";
const errorMsg = "An error has occurred while sending the request!";

export const fetchDataResults = (data) => ({
    type: types.FETCH_TVSHOWS,
    payload: data
})

export const fetchFailure = () => ({
    type: types.FETCH_FAILURE,
    payload: errorMsg
})

export const setLoadingState = () => ({
    type: types.LOADING_STATE,
    payload: false
})

export const fetchTvshows = () => dispatch => {
    axios.get(apiURL)
        .then( response => {
            //console.log(response.data.results);

            return dispatch(fetchDataResults(response.data.results))

        })
        .catch( error => {
            //console.log(error)
            dispatch(fetchFailure())
        })
        .finally(() => {
            dispatch(setLoadingState())
        });

}

export const setSortingCriterion = () => (dispatch, criterion) => {
    //console.log('in action setSortingCriterion, got a criterion - ', criterion)
    return dispatch({
        type: types.SET_SORTING_CRITERION,
        payload: criterion
    })
}

export const CriterionToSort = {
    SORT_BY_NUMBER: 'SORT_BY_NUMBER',
    SORT_BY_NAME: 'SORT_BY_NAME',
    SORT_BY_RATE: 'SORT_BY_RATE',
    SORT_BY_DATE: 'SORT_BY_DATE'
}



