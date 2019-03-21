import React from 'react';
import { CriterionToSort } from '../actions';
import SortByCriterion from '../containers/SortByCriterion'

const SortingCriteria = () => {

        return(
            <span className="sorting-criteria">
                <strong>Sort by:</strong>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NUMBER}>Number</SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_NAME}>Title</SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_RATE}>Rate</SortByCriterion>
                <SortByCriterion criterion={CriterionToSort.SORT_BY_DATE}>First Air Date</SortByCriterion>
            </span>
        )
}

export default SortingCriteria;
