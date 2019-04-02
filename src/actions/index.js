import { FETCH_TVSHOWS } from './types';
import { SET_SORTING_CRITERION } from './types';
import { FETCH_FAILURE } from './types';
import axios from 'axios';

const apiURL = "https://api.themoviedb.org/3/tv/popular?api_key=eaa4854fc14c0423809d014974235e94&language=en-US&page=1";
const errorMsg = "An error has occurred while sending the request!";

export const fetchTvshows = () => dispatch => {
    axios.get(apiURL)
        .then( response => {
            console.log(response.data.results);

            return dispatch({
                type: FETCH_TVSHOWS,
                payload: response.data.results
            })

        })
        .catch( error => {
            console.log(error)
            // return dispatch({
            //     type: FETCH_FAILURE,
            //     payload: errorMsg
            // })
        });

}

export const setSortingCriterion = () => (dispatch, criterion) => {
    //console.log('in action setSortingCriterion, got a criterion - ', criterion)
    return dispatch({
        type: SET_SORTING_CRITERION,
        payload: criterion
    })
}

export const CriterionToSort = {
    SORT_BY_NUMBER: 'SORT_BY_NUMBER',
    SORT_BY_NAME: 'SORT_BY_NAME',
    SORT_BY_RATE: 'SORT_BY_RATE',
    SORT_BY_DATE: 'SORT_BY_DATE'
}



