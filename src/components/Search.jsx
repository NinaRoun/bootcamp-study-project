import React from 'react';
import PropTypes from "prop-types";

const Search = ({ onChange }) => {

        return(
            <span className="search-input">
                <label className="search-input-item"><strong>Search:</strong></label>
                <input type="search" onChange={onChange}/>
            </span>
        )
}

Search.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Search;
