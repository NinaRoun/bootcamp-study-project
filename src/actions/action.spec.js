import { fetchDataResults, fetchFailure, setLoadingState, setSortingCriterion } from '../reducers/index';
import * as types from '../actions/types';
import { fetchTvshows, setSortingCriterion } from './index';

describe("tvshows actions", () => {

    it("fetchFailure", () => {
        const expectedAction = {
            type: types.FETCH_FAILURE,
            payload: "500 server error"
        }

        expect(fetchFailure(expectedAction.payload)).toEqual(expectedAction)
    });

    it("setLoadingState", () => {
        const expectedAction = {
            type: types.LOADING_STATE,
            payload: "false"
        }

        expect(setLoadingState(expectedAction.payload)).toEqual(expectedAction)
    });

    it("setSortingCriterion", () => {
        const expectedAction = {
            type: types.SET_SORTING_CRITERION,
            payload: "some-criteria"
        }
        expect(setSortingCriterion(expectedAction.payload)).toEqual(expectedAction)
    });

})
