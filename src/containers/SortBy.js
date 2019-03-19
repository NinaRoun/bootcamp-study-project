import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchTvshows } from '../actions'

class SortBy extends Component {

    render() {

        return (
            <div className="mainTable">

            </div>
        );
    }
}


const mapStateToProps = state => ({
    tvshows: state.tvshows
});

const mapDispatchToProps = dispatch => ({
    dispatch,
})

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TvshowTable)
