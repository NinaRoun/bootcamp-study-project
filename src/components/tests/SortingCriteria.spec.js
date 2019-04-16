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
            //expect(enzymeWrapper.find('span')).toHaveProperty('className');
            //expect(enzymeWrapper.find('Connect(Criterion)').get(0)).toHaveProperty('criterion', 'SORT_BY_NUMBER');
            //expect(enzymeWrapper.find('Connect(Criterion)').get(0).contains(<Connect(Criterion) criterion="SORT_BY_NUMBER">Number</Connect(Criterion)>)).toEqual(true);
            //expect(enzymeWrapper.find('Connect(Criterion)').get(0).contains('<Connect(Criterion) criterion="SORT_BY_NUMBER">Number</Connect(Criterion)>')).toEqual(true);
            //const component = enzymeWrapper.find('Connect(Criterion)').get(0);
            //console.log('component = ' + component);
            //expect(component.prop('criterion')).toEqual('SORT_BY_NUMBER');
            expect(enzymeWrapper.find('Connect(Criterion)')).toHaveLength(4);
            // enzymeWrapper.find('Connect(Criterion)').forEach( (node) => {
            //     expect(node.props.toHaveProperty('criterion')).toEqual(true)
            // })
        })
    })
});


