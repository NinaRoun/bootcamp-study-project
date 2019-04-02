export const initialSate = {
    tvshows: [],
    //error: false
};

//const sortByKey = key => (a, b) => a[key] > b[key];

const tvshowReducer = (state = initialSate.tvshows, action) => {
    switch (action.type) {
        case 'FETCH_TVSHOWS':
            return [
                ...state,
                ...action.payload
                //tvshows: [...action.payload.data],
                //error: action.payload.data
                //...action.payload.data
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

export default tvshowReducer




