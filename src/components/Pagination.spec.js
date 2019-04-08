import React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from './Pagination.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//import style from "../stylesheets/main.styl";

describe('Pagination component', () => {
    const props = {
        className: "",
        number: 1,
        onClick: () => {}
    }

    describe('Page is active', () => {
        it('page is clicked', () => {
            const nextProps = {
                ...props,
                className: "active"
            }
            console.log(Pagination)
            const pagination = shallow(<Pagination { ...nextProps } />)
            //console.log(Pagination)
            expect(pagination.hasClass("active")).to.equal(true)
        })
    })

})


