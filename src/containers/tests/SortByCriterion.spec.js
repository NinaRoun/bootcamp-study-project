import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import SortByCriterion from '../SortByCriterion.js';
import {CriterionToSort, fetchSortingCriterion} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        children: "name",
        onClick: () => ({})
    };

    return {
        props
    }
}
//
// const thunk = ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//         return action(dispatch, getState)
//     }
//
//     return next(action)
// };
//
const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = action => thunk(store)(next)(action);
    return { store, next, invoke }
};

const shallowWithStore = (component, store) => {
    const context = {
        store,
    };
    return shallow(component, { context });
};

const initialState = {
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
};

const mockStore = configureStore();
let store, wrapper;

// beforeEach(()=>{
//     store = mockStore(initialState);
//     wrapper = mount( <Provider store={store}><SortByCriterion /></Provider> )
// });


it('calls the `onClick` function to sort the table', () => {
    // it('check action on dispatching ', () => {
    //     let action;
    //     store.dispatch(fetchSortingCriterion(CriterionToSort.SORT_BY_NAME));
    //     action = store.getActions();
    //     expect(action[0].type).toBe("SET_SORTING_CRITERION");
    // });

    const { props } = setup();
    //const mockFetchSortingCriterion = jest.fn();
    const { store, invoke } = create();
    //const enzymeWrapper = shallowWithStore(<SortByCriterion />, store);
    const enzymeWrapper = mount( <Provider criterion="SORT_BY_NUMBER" {...props} store={store}><SortByCriterion /></Provider>);
    //const enzymeWrapper = shallow(<SortByCriterion store={store} />);
    const someSpan = enzymeWrapper.dive().find("Criterion");
    console.log(someSpan.debug());
    //component.dive().find("form > div > input").simulate("change", { target: { value: "Site" } });
    // invoke(props.onClick(props.criterion));
    // expect(props.onClick).toHaveBeenCalledTimes(1)
});




