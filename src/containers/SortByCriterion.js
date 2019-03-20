import { connect } from 'react-redux'
import { setSortingCriterion } from '../actions'
import SortingCriteria from '../components/SortingCriteria'

const sortByKey = key => (a, b) => a[key] > b[key];

const getSortedTable = (tvshows, criterion) => {
    switch (criterion) {
        case SortingCriteria.SORT_BY_NUMBER:
            console.log('clicked to sorted by number');
            return tvshows.slice().sort(sortByKey('number'))
        case SortingCriteria.SORT_BY_NAME:
            console.log('clicked to sorted by name');
            return tvshows.slice().sort(sortByKey('name'))
        case SortingCriteria.SORT_BY_RATE:
            console.log('clicked to sorted by rate');
            return tvshows.slice().sort(sortByKey('rate'))
        default:
            throw new Error('Choose criterion to sort')
    }
}

const mapStateToProps = (state, ownProps) => ({
    //tvshows: getSortedTable(state.tvshows, state.SortingCriterion)
    tvshows: state.tvshows,
    //criterion: state.criterion
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch(setSortingCriterion(ownProps.criterion))
    onClick: () => setSortingCriterion(dispatch, getSortedTable(this.props.tvshows, ownProps.criterion))
    //should send dispatch and a new tvshows list to action
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortingCriteria)
