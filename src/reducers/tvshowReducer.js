import * as types from '../actions/types';

export const initialState = {
    tvshowsData: {
        tvshows: [],
        error: "",
        isLoading: false,
    },
};
export const tvshowReducer = (state = initialState.tvshowsData, action) => {
    switch (action.type) {

        case types.FETCH_TVSHOWS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: "",
            };

        case types.FETCH_TVSHOWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case types.FETCH_TVSHOWS_SUCCESS:
            return {
                ...state,
                tvshows: [...state.tvshows, ...action.payload],
                isLoading: false,
                error: "",
            };

        case 'SET_SORTING_CRITERION':
            const newState = state.tvshows.slice(0);
            if(action.payload === 'name') {
                newState.sort((a,b) => {
                    return a[action.payload] < b[action.payload] ? -1 : 1;
                });
            } else if(action.payload === 'vote_average') {
                newState.sort((a,b) => {
                    return b[action.payload] - a[action.payload];
                });
            } else if(action.payload === 'first_air_date') {
                newState.sort((a,b) => {
                    return b[action.payload].replace(/-/g, '') - a[action.payload].replace(/-/g, '');
                });
            } else {
                newState.sort((a,b) => {
                    return a[action.payload] - b[action.payload];
                });
            }
            return {
                ...state,
                tvshows: newState
            };

        default:
            return state
    }

};





