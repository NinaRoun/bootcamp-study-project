import { tvshowReducer } from './index';
import { initialState } from './tvshowReducer';
import * as types from '../actions/types';
//import FETCH_TVSHOWS, SET_SORTING_CRITERION, FETCH_FAILURE, LOADING_STATE
// const sum = (a, b) => {
//     console.log('in sum a + b');
//     return a + b;
// }
//
// describe('app tests', () => {
//     it('sum test', () => {
//         expect(sum(2, 3)).toEqual(5);
//     })
// })

describe("tvshows reducer", () => {
    it("LOADING_STATE", () => {
        const action = {
            type: types.LOADING_STATE
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false
        })
    })

    it("FETCH_FAILURE", () => {
        const action = {
            type: types.FETCH_FAILURE,
            payload: "500 server error"
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: action.payload
        })
    })

    it("FETCH_TVSHOWS", () => {
        const action = {
            type: types.FETCH_TVSHOWS,
            payload: [1, 2, 3]
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            tvshows: action.payload
        })
    })

    it("SET_SORTING_CRITERION_NAME", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
            ],
            error: "",
            isLoading: false,
        }

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "name"
        }

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            tvshows.sort((a, b) => a[action.payload] < b[action.payload] ? -1 : 1)
        })
    })

    it("SET_SORTING_CRITERION_VOTE_AVERAGE", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
                ],
            error: "",
            isLoading: false,
        }

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "vote_average"
        }

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            tvshows.sort((a, b) => b[action.payload] - a[action.payload])
        })
    })

    it("SET_SORTING_CRITERION_FIRST_AIR_DATE", () => {
        const stateBefore = {
            tvshows: [
                {name: 'one', vote_average: 7.3, first_air_date: "2020-03-21"},
                {name: 'two', vote_average: 5.1, first_air_date: "2018-09-23"},
                {name: 'three', vote_average: 4.5, first_air_date: "2015-11-08"}
            ],
            error: "",
            isLoading: false,
        }

        const action = {
            type: types.SET_SORTING_CRITERION,
            payload: "first_air_date"
        }

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            tvshows.sort((a, b) => a[action.payload] - b[action.payload])
        })
    })

})
