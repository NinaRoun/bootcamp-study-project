import { CriterionToSort } from '../actions';

export const initialSate = {
    tvshows: [],
    criterion: CriterionToSort.SORT_BY_NAME
};

const tvshowReducer = (state = initialSate.tvshows, action) => {
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

export default tvshowReducer

