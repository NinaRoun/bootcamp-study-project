import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedTvshowTable, { TvshowTable } from '../TvshowTable.js';
import {fetchTvshows} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        tvshows: [{
                id: 1,
                name: 'one',
                origin_country: 'US',
                original_language: 'English',
                overview: 'Lorem ipsum dolor sit amet, searchedArea consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                vote_average: 7.3,
                vote_count: 250,
                first_air_date: "2020-03-21"
            },{
                id: 2,
                name: 'two',
                origin_country: 'US',
                original_language: 'English',
                overview: 'Lorem ipsum dolor sit amet, searchedArea consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                vote_average: 7.3,
                vote_count: 250,
                first_air_date: "2020-03-21"
            }],
        isLoading: false,
        error: "",
        fetchTvShows: () => {}
    };

    const enzymeWrapper = shallow(<TvshowTable {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

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

// it('passes through non-function action', () => {
//     const { next, invoke } = create();
//     const action = { type: 'TEST' };
//     invoke(action);
//     expect(next).toHaveBeenCalledWith(action)
// });

it('renders properly', () => {
    const { enzymeWrapper } = setup();
    //console.log(enzymeWrapper.debug());
    expect(enzymeWrapper).toMatchSnapshot();
    //console.log(enzymeWrapper.children().debug());
    // const mockFetchGetShows = jest.fn();
    // const nextProps = {
    //     ...props,
    //     fetchTvShows: mockFetchGetShows
    // };
    //expect(enzymeWrapper).toHaveLength(1);
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

// it('passes dispatch and getState', () => {
//     const { store, invoke } = create();
//     invoke((dispatch, getState) => {
//         dispatch('TEST DISPATCH');
//         getState()
//     });
//     expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
//     expect(store.getState).toHaveBeenCalled()
// });



