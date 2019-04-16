import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        onChange: jest.fn()
    };
    const event = {
        preventDefault() {},
        target: { value: 'value' }
    };

    const enzymeWrapper = shallow(<Search {...props} />);

    return {
        props,
        event,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Search', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('strong').text()).toBe('Search:');
        });

        it('simulates onChange events', () => {
            const { enzymeWrapper, event, props } = setup();
            enzymeWrapper.find('input').simulate('change', event.target.value);
            expect(props.onChange).toBeCalledWith('value');
        })
    })
});