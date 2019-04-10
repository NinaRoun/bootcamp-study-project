import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from '../Error.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        error: '500 server error'
    }

    const enzymeWrapper = shallow(<Error {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Error', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('strong').text()).toBe('500 server error');

        })
    })
})