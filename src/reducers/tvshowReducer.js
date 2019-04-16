export const initialState = {
    tvshows: [],
    error: "",
    isLoading: true,
};

export const tvshowReducer = (state = initialState.tvshows, action) => {
    switch (action.type) {

        case 'FETCH_TVSHOWS':
            return [
                ...state,
                ...action.payload
            ];

        case 'SET_SORTING_CRITERION':
            //console.log('in reducer to sort, action.payload = ', action.payload);
            const newState = state.slice(0);
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
            return newState;
        default:
            return state
    }

}

export const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type){
        case 'LOADING_STATE':
            return action.payload;
        default:
            return state;
    }
}

export const fetchFailure = (state = initialState.error, action) => {
    switch (action.type){
        case 'FETCH_FAILURE':
            return action.payload;
        default:
            return state;
    }
}

// export default tvshowReducer




