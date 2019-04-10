import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../Loading.jsx';

configure({ adapter: new Adapter() });

function setup() {

    const enzymeWrapper = shallow(<Loading />);

    return {
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Loading', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('strong').text()).toBe('Loading...');

        })
    })
})