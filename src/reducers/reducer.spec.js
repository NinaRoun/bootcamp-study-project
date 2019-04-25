import { tvshowReducer } from './tvshowReducer';
import { initialState } from './tvshowReducer';
import * as types from '../actions/types';

describe("tvshows reducer", () => {
    it("FETCH_TVSHOWS_REQUEST without error message", () => {
        const action = {
            type: types.FETCH_TVSHOWS_REQUEST,
        };

        expect(tvshowReducer(initialState.tvshowsData, action)).toEqual({
            ...initialState.tvshowsData,
            isLoading: true,
            error: "",
        })
    });

    it("FETCH_TVSHOWS_REQUEST with error message", () => {
        const initialStateWithError = {
            tvshowsData: {
                tvshows: [],
                error: "500 server error",
                isLoading: false,
            }
        };

        const action = {
            type: types.FETCH_TVSHOWS_REQUEST,
        };

        expect(tvshowReducer(initialStateWithError.tvshowsData, action)).toEqual({
            ...initialState.tvshowsData,
            isLoading: true,
            error: "",
        })
    });

    it("FETCH_TVSHOWS_FAILURE", () => {
        const action = {
            type: types.FETCH_TVSHOWS_FAILURE,
            payload: "500 server error"
        };

        expect(tvshowReducer(initialState.tvshowsData, action)).toEqual({
            ...initialState.tvshowsData,
            isLoading: false,
            error: action.payload,
        })
    });

    it("FETCH_TVSHOWS_SUCCESS", () => {
        const action = {
            type: types.FETCH_TVSHOWS_SUCCESS,
            payload: [1, 2, 3]
        };

        expect(tvshowReducer(initialState.tvshowsData, action)).toEqual({
            ...initialState.tvshowsData,
            isLoading: false,
            error: "",
            tvshows: action.payload
        })
    });

    it("SET_SORTING_CRITERION_NAME", () => {
        const stateBefore = {
            tvshowsData: {
                isLoading: false,
                error: "",
                tvshows: [
                    {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                    {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                    {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
                ]
            }
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "name"
        };

        expect(tvshowReducer(stateBefore.tvshowsData, action)).toEqual({
            ...stateBefore.tvshowsData,
            tvshows: stateBefore.tvshowsData.tvshows.sort((a, b) => a[action.payload] < b[action.payload] ? -1 : 1)
        })
    });

    it("SET_SORTING_CRITERION_VOTE_AVERAGE", () => {
        const stateBefore = {
            tvshowsData: {
                isLoading: false,
                error: "",
                tvshows: [
                    {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                    {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                    {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
                ]
            }
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "vote_average"
        };

        expect(tvshowReducer(stateBefore.tvshowsData, action)).toEqual({
            ...stateBefore.tvshowsData,
            tvshows: stateBefore.tvshowsData.tvshows.sort((a, b) => b[action.payload] - a[action.payload])
        })
    });

    it("SET_SORTING_CRITERION_FIRST_AIR_DATE", () => {
        const stateBefore = {
            tvshowsData: {
                isLoading: false,
                error: "",
                tvshows: [
                    {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                    {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                    {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
                ]
            }
        };

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "first_air_date"
        };

        expect(tvshowReducer(stateBefore.tvshowsData, action)).toEqual({
            ...stateBefore.tvshowsData,
            tvshows: stateBefore.tvshowsData.tvshows.sort((a, b) => b[action.payload].replace(/-/g, '') - a[action.payload].replace(/-/g, ''))
        })
    })

});
