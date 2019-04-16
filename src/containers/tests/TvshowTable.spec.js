import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TvshowTable from '../TvshowTable.js';
import {fetchTvshows} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        tvshows: [],
        isLoading: false,
        error: "500 server error",
        fetchTvShows: () => {}
    };

    //const enzymeWrapper = shallow(<TvshowTable {...props} />);

    return {
        props,
        //enzymeWrapper
    }
}

//-----------------------------------------------------------

const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState)
    }

    return next(action)
};

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = action => thunk(store)(next)(action);
    return { store, next, invoke }
};

it('passes through non-function action', () => {
    const { next, invoke } = create();
    const action = { type: 'TEST' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action)
});

it('calls the function', () => {
    const { props } = setup();
    const mockFetchGetShows = jest.fn();
    const nextProps = {
        ...props,
        fetchTvShows: mockFetchGetShows
    };

    const { invoke } = create();
    invoke(mockFetchGetShows);
    expect(mockFetchGetShows).toHaveBeenCalledTimes(1)
});

it('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
        dispatch('TEST DISPATCH');
        getState()
    });
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
    expect(store.getState).toHaveBeenCalled()
});

//-----------------------------------------------------------

describe('components', () => {
    describe('initial TvshowTable', () => {
        const { props } = setup();
        // const mockFetchGetShows = jest.fn();
        // const nextProps = {
        //     ...props,
        //     fetchTvShows: mockFetchGetShows
        // };
        //
        // const enzymeWrapper = shallow(<TvshowTable {...nextProps} />);
        //
        it('dispatches the `fetchTvShows()` method', () => {
        //     expect(mockFetchGetShows).toHaveBeenCalledTimes(1)
        //     expect(fetchTvshows.mock.calls.length).toEqual(1)
        })

    })
});


