import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedTvshowTable, { TvshowTable } from '../TvshowTable.js';
import {fetchTvshows} from "../../actions";

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        tvshows: [{
                id: 1,
                name: 'one',
                origin_country: 'US',
                original_language: 'English',
                overview: 'Lorem ipsum dolor sit amet, searchedArea consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                vote_average: 7.3,
                vote_count: 250,
                first_air_date: "2020-03-21"
            },{
                id: 2,
                name: 'two',
                origin_country: 'US',
                original_language: 'English',
                overview: 'Lorem ipsum dolor sit amet, searchedArea consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
                vote_average: 7.3,
                vote_count: 250,
                first_air_date: "2020-03-21"
            }],
        isLoading: false,
        error: "",
        fetchTvShows: () => {}
    };

    //const enzymeWrapper = shallow(<TvshowTable {...props} />);

    return {
        props
    }
}

const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState)
    }

    return next(action)
};

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = action => thunk(store)(next)(action);
    return { store, next, invoke }
};

describe('Tvshow container initial', () => {
    const mockFetchGetShows = jest.fn();
    const { props } = setup();
    const nextProps = {
        ...props,
        fetchTvShows: mockFetchGetShows
    };
    const enzymeWrapper = shallow(<TvshowTable {...nextProps} />);

    it('renders properly', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    });

    it('calls the `fetchTvShows` function', () => {
        expect(mockFetchGetShows).toHaveBeenCalledTimes(1)
    });
});

describe('Tvshow preloader', () => {
    const { props } = setup();
    const nextProps = {
        ...props,
        isLoading: true
    };
    const enzymeWrapper = shallow(<TvshowTable {...nextProps} />);

    it('renders properly', () => {
        const loadingComponent = enzymeWrapper.find('Loading');
        expect(loadingComponent).toHaveLength(1);
    });
});

describe('Error while fetching', () => {
    const { props } = setup();
    const nextProps = {
        ...props,
        error: '500 server error'
    };
    const enzymeWrapper = shallow(<TvshowTable {...nextProps} />);

    it('renders properly', () => {
        const errorComponent = enzymeWrapper.find('Error');
        expect(errorComponent).toHaveLength(1);
    });
});



