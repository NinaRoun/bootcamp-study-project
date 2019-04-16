import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Criterion from '../Criterion.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        children: "Criterion",
        onClick: jest.fn()
    };

    const enzymeWrapper = shallow(<Criterion {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Criterion', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.children()).toHaveLength(1);
        });

        it('simulates click events', () => {
            const { enzymeWrapper, props } = setup();
            enzymeWrapper.find('span').simulate('click');
            expect(props.onClick.mock.calls.length).toEqual(1);
        })
    })
});


