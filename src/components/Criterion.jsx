import React from 'react'
import PropTypes from 'prop-types'

const Criterion = ({ children, onClick }) => (
    <span
        onClick={onClick}
    >
        {children}
    </span>
)

Criterion.propTypes = {
    //active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Criterion