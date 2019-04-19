import { tvshowReducer, isLoading, fetchFailure } from './tvshowReducer';
import { initialState } from './tvshowReducer';
import * as types from '../actions/types';

describe("tvshows reducer", () => {
    it("LOADING_STATE", () => {
        const action = {
            type: types.LOADING_STATE,
            payload: false
        };

        expect(isLoading(initialState.isLoading, action)).toEqual(
            //...initialState,
            action.payload
        )
    });

    it("FETCH_FAILURE", () => {
        const action = {
            type: types.FETCH_FAILURE,
            payload: "500 server error"
        };

        expect(fetchFailure(initialState.error, action)).toEqual(
            action.payload
        )
    });

    it("FETCH_TVSHOWS", () => {
        const action = {
            type: types.FETCH_TVSHOWS,
            payload: [1, 2, 3]
        };

        expect(tvshowReducer(initialState.tvshows, action)).toEqual([
            ...initialState.tvshows,
            ...action.payload
        ])
    });

    it("SET_SORTING_CRITERION_NAME", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
            ]
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "name"
        };

        expect(tvshowReducer(stateBefore.tvshows, action)).toEqual(
            stateBefore.tvshows.sort((a, b) => a[action.payload] < b[action.payload] ? -1 : 1)
        )
    });

    it("SET_SORTING_CRITERION_VOTE_AVERAGE", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
                ]
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "vote_average"
        };

        expect(tvshowReducer(stateBefore.tvshows, action)).toEqual(
            stateBefore.tvshows.sort((a, b) => b[action.payload] - a[action.payload])
        )
    });

    it("SET_SORTING_CRITERION_FIRST_AIR_DATE", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
            ]
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "first_air_date"
        };

        expect(tvshowReducer(stateBefore.tvshows, action)).toEqual(
            stateBefore.tvshows.sort((a, b) => b[action.payload].replace(/-/g, '') - a[action.payload].replace(/-/g, ''))
        )
    })

});
