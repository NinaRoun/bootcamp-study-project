import { CriterionToSort } from '../actions';

export const initialSate = {
    tvshows: []
};

//const sortByKey = key => (a, b) => a[key] > b[key];

const tvshowReducer = (state = initialSate.tvshows, action) => {
    switch (action.type) {
        case 'FETCH_TVSHOWS':
            return [
                ...state,
                ...action.payload
            ];
        case 'SET_SORTING_CRITERION':
            console.log('in reducer to sort, action.payload = ', action.payload);
            const newState = state.slice(0);
            newState.sort((a,b) => {
                return a[action.payload] - b[action.payload];
            });
            // return state.slice(0).sort((a,b) => {
            //     return a[action.payload] - b[action.payload];  //fix sorting
            // })
        default:
            return state
    }

}

export default tvshowReducer


