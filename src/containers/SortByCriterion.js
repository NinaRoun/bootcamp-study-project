import { connect } from 'react-redux';
import { fetchSortingCriterion } from '../actions';
import Criterion from '../components/Criterion';
import { CriterionToSort } from '../actions';

const getSortedTable = (criterion) => {
    switch (criterion) {
        case CriterionToSort.SORT_BY_NUMBER:
            //console.log('clicked to sorted by number');
            return 'id'
        case CriterionToSort.SORT_BY_NAME:
            //console.log('clicked to sorted by name');
            return 'name'
        case CriterionToSort.SORT_BY_RATE:
            //console.log('clicked to sorted by rate');
            return 'vote_average'
        case CriterionToSort.SORT_BY_DATE:
            //console.log('clicked to sorted by rate');
            return 'first_air_date'
        default:
            throw new Error('Choose criterion to sort')
    }
}
const mapStateToProps = (state, ownProps) => ({
    //tvshows: getSortedTable(state.tvshows, state.SortingCriterion)
    tvshows: state.tvshows,
    //criterion: state.SortingCriterion
    //criterion: state.criterion
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //console.log('from SortByCriterion, ', ownProps)  //sort by number
    //onClick: () => dispatch(setSortingCriterion(getSortedTable(ownProps.criterion)))
    onClick: fetchSortingCriterion().bind(null, dispatch, getSortedTable(ownProps.criterion))
    //should send dispatch and a criterion to sort to action
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Criterion)

