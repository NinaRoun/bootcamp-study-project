import React from 'react';
import PropTypes from 'prop-types';
import { CriterionToSort } from '../actions';
import SortByCriterion from '../containers/SortByCriterion'

const SortingCriteria = ({ }) => {

        return(
            <div className="sorting-criteria">
                <strong>Sort by:</strong>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NUMBER}>Number</SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NAME}>Title</SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_RATE}>Rate</SortByCriterion>
            </div>
        )
}

SortingCriteria.propTypes = {
    // onClick: PropTypes.func.isRequired,
    // className: PropTypes.string.isRequired,
    // number: PropTypes.number.isRequired
}

export default SortingCriteria;