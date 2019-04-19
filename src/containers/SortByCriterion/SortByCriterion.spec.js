import React from 'react';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Criterion from '../../components/Criterion/Criterion';

configure({ adapter: new Adapter() });

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
        subscribe: jest.fn(),
    };
    const next = jest.fn();
    return { store, next }
};

function setup() {
    const mockSortShows = jest.fn();
    const props = {
        children: "name",
        onClick: mockSortShows,
    };

    return {
        props,
        mockSortShows
    }
}

it('calls the `onClick` function to sort the table', () => {
    const { props, mockSortShows } = setup();
    const { store } = create();
    const enzymeWrapper = mount( <Provider store={store}><Criterion criterion="SORT_BY_NUMBER" {...props} /></Provider>);
    const someSpan = enzymeWrapper.find("span");
    someSpan.simulate("click");
    expect(mockSortShows).toHaveBeenCalledTimes(1)
});




