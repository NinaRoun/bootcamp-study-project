export const initialSate = {
    tvshows: [],
};

const movieReducer = (state = initialSate.tvshows, action) => {
    switch (action.type) {
        case 'FETCH_TVSHOWS':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state
    }

}

export default movieReducer

