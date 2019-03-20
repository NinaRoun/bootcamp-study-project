import React from 'react';
import PropTypes from 'prop-types';
import { CriterionToSort } from '../actions';
import SortByCriterion from '../containers/SortByCriterion'

const SortingCriteria = ({ }) => {

        return(
            <div className="sorting-criteria">
                <strong>Sort by:</strong>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NUMBER}><span>Number</span></SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NAME}><span>Title</span></SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_RATE}><span>Rate</span></SortByCriterion>
            </div>
        )
}

SortingCriteria.propTypes = {
    // onClick: PropTypes.func.isRequired,
    // className: PropTypes.string.isRequired,
    // number: PropTypes.number.isRequired
}

export default SortingCriteria;