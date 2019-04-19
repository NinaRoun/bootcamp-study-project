import React from 'react';
import PropTypes from "prop-types";
import style from '../../stylesheets/main.styl';

const Search = ({ onChange }) => {

        return(
            <span className={style.searchInput}>
                <label className={style.searchInputItem}><strong>Search:</strong></label>
                <input type="search" onChange={onChange}/>
            </span>
        )
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Search;
