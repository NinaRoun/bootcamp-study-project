import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onClick, className, number }) => {

        return(
            <span
                onClick={onClick.bind(this, number)}
                className={className}
            >
                {number}
            </span>
        )
}

Pagination.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

export default Pagination;
