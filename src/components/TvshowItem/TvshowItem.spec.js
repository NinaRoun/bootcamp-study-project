import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TvshowItem from './TvshowItem.jsx';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        tvshow: {
            id: 1,
            name: 'one',
            origin_country: 'US',
            original_language: 'English',
            overview: 'Lorem ipsum dolor sit amet, searchedArea consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            vote_average: 7.3,
            vote_count: 250,
            first_air_date: "2020-03-21"
        },
        search: "searchedArea"
    };

    const enzymeWrapper = shallow(<TvshowItem {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('TvshowItem', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper).toMatchSnapshot();
            expect(enzymeWrapper.find('img')).toHaveLength(1);
        });

        it('simulates search', () => {
            const { enzymeWrapper, props } = setup();
            const searchComponent = enzymeWrapper.find('#searchedArea').at(1);
            expect(searchComponent.text()).toBe(props.search);

        })
    })
});


