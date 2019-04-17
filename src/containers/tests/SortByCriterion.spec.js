import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortByCriterion from '../TvshowTable.js';
import {fetchSortingCriterion, fetchTvshows} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        criterion: 'name',
        onClick: jest.fn()
    };

    return {
        props
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

it('calls the `onClick` function to sort the table', () => {
    const { props } = setup();
    //const mockFetchSortingCriterion = jest.fn();
    const { invoke } = create();
    invoke(props.onClick(props.criterion));
    expect(props.onClick).toHaveBeenCalledTimes(1)
});




