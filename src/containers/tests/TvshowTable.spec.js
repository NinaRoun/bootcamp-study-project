import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import TvshowTable from '../TvshowTable.js';
import {fetchTvshows} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        tvshows: [1, 2, 3],
        isLoading: false,
        error: "500 server error",
        fetchTvshows: () => {}
    }

    // const mockFetchGetShows = jest.fn()
    // const nextProps = {
    //     ...props.tvshows,
    //     fetchTvshows: mockFetchGetShows
    // }

    const enzymeWrapper = shallow(<TvshowTable {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('TvshowTable', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            console.log(enzymeWrapper.debug());
            // expect(enzymeWrapper.hasClass('active')).toBe(true);
            // expect(enzymeWrapper.find('span').text()).toBe('1');

        })

        it('simulates click events', () => {
            const { enzymeWrapper, props } = setup();
            // const onPageClick = sinon.spy();
            // const wrapper = shallow(<Pagination onPageClick={onPageClick.bind(this, 1)} />);
            // wrapper.find('span').simulate('click');
            // expect(onPageClick).to.have.property('callCount', 1);
        })
    })
})


