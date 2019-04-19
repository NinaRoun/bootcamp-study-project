import * as types from '../actions/types';
import { fetchDataResults, fetchFailure, setLoadingState, setSortingCriterion } from './index';

describe("tvshows actions", () => {

    it("fetchDataResults", () => {
        const expectedAction = {
            type: types.FETCH_TVSHOWS,
            payload: [1, 2, 3]
        };

        expect(fetchDataResults(expectedAction.payload)).toEqual(expectedAction)
    });

    it("fetchFailure", () => {
        const expectedAction = {
            type: types.FETCH_FAILURE,
            payload: "An error has occurred while sending the request!"
        };

        expect(fetchFailure(expectedAction.payload)).toEqual(expectedAction)
    });

    it("setLoadingState", () => {
        const expectedAction = {
            type: types.LOADING_STATE,
            payload: false
        };

        expect(setLoadingState(expectedAction.payload)).toEqual(expectedAction)
    });

    it("setSortingCriterion", () => {
        const expectedAction = {
            type: types.SET_SORTING_CRITERION,
            payload: "some-criteria"
        };
        expect(setSortingCriterion(expectedAction.payload)).toEqual(expectedAction)
    });

});
