import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Search from '../Search.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        onChange: jest.fn()
    }

    const enzymeWrapper = shallow(<Search {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Search', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('strong').text()).toBe('Search:');
            //expect(enzymeWrapper.find('span').hasClass('search-input')).to.have.lengthOf(!0);

        })

        // it('simulates click events', () => {
        //     const { enzymeWrapper, props } = setup();
        //     const onPageClick = sinon.spy();
        //     const wrapper = shallow(<Search onPageClick={onPageClick.bind(this, 1)} />);
        //     wrapper.find('span').simulate('click');
        //     expect(onPageClick).to.have.property('callCount', 1);
        // })
    })
})