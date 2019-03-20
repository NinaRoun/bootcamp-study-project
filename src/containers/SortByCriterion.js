import { connect } from 'react-redux';
import { setSortingCriterion } from '../actions';
import Criterion from '../components/Criterion';
import { CriterionToSort } from '../actions';

const sortByKey = key => (a, b) => a[key] > b[key];

const getSortedTable = (tvshows, criterion) => {
    switch (criterion) {
        case CriterionToSort.SORT_BY_NUMBER:
            console.log('clicked to sorted by number');
            return tvshows.slice().sort(sortByKey('number'))
        case CriterionToSort.SORT_BY_NAME:
            console.log('clicked to sorted by name');
            return tvshows.slice().sort(sortByKey('name'))
        case CriterionToSort.SORT_BY_RATE:
            console.log('clicked to sorted by rate');
            return tvshows.slice().sort(sortByKey('rate'))
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
    //onClick: () => dispatch(setSortingCriterion(ownProps.criterion))
    onClick: () => setSortingCriterion(dispatch, getSortedTable(this.props.tvshows, ownProps.criterion))
    //should send dispatch and a new tvshows list to action
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Criterion)

