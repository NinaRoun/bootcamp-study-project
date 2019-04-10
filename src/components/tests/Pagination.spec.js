import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Pagination from '../Pagination.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        className: "active",
        number: 1,
        onClick: jest.fn()
    }

    const enzymeWrapper = shallow(<Pagination {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Pagination', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.hasClass('active')).toBe(true);
            expect(enzymeWrapper.find('span').text()).toBe('1');

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


