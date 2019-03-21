import React from 'react';
import { CriterionToSort } from '../actions';
import SortByCriterion from '../containers/SortByCriterion'

const Search = ({ onChange }) => {

        return(
            <span className="search-input">
                <label className="search-input-item"><strong>Search:</strong></label>
                <input type="search" onChange={onChange}/>
            </span>
        )
}

export default Search;
