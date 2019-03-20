import { CriterionToSort } from '../actions'
import {initialSate} from "./tvshowReducer";

//const sortByKey = key => (a, b) => a[key] > b[key];

const SortingCriterion = (state = initialSate.tvshows, action) => {
    switch (action.type) {
        case 'SET_SORTING_CRITERION':
            return [
                //state.slice().sort(sortByKey(action.payload))
            ];
        default:
            //return state.slice().sort(sortByKey('name')) //new tvshows come from action, should replace this
            return state
    }
}

export default SortingCriterion
