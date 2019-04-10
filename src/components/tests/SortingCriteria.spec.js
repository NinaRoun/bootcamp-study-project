import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import SortingCriteria from '../SortingCriteria.jsx';

configure({ adapter: new Adapter() });

function setup() {

    const enzymeWrapper = shallow(<SortingCriteria />);

    return {
        enzymeWrapper
    }
}

describe('components', () => {
    describe('SortingCriteria', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            //console.log(enzymeWrapper.debug());
            expect(enzymeWrapper.find('strong').text()).toBe('Sort by:');
            expect(enzymeWrapper.find('Connect(Criterion)')).toHaveLength(4);
        })
    })
})


