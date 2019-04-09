import { connect } from 'react-redux';
import { setSortingCriterion, CriterionToSort } from '../actions';
import Criterion from '../components/Criterion';

const getSortedTable = (criterion) => {
    switch (criterion) {
        case CriterionToSort.SORT_BY_NUMBER:
            return 'id'
        case CriterionToSort.SORT_BY_NAME:
            return 'name'
        case CriterionToSort.SORT_BY_RATE:
            return 'vote_average'
        case CriterionToSort.SORT_BY_DATE:
            return 'first_air_date'
        default:
            throw new Error('Choose criterion to sort')
    }
}
const mapStateToProps = (state, ownProps) => ({
    tvshows: state.tvshows
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: setSortingCriterion().bind(null, dispatch, getSortedTable(ownProps.criterion))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Criterion)

