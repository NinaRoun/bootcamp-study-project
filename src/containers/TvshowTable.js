import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import { fetchTvshows } from '../actions'
import TvshowItem from '../components/TvshowItem';

class TvshowTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            showsPerPage: 6
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //console.log('current page is ', this.state.currentPage);
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    componentWillMount() {
        fetchTvshows()(this.props.dispatch);
    }

    render() {

        const { currentPage, showsPerPage } = this.state;

        const indexOfLastShow = currentPage * showsPerPage;  //6, 12, 18, ...
        const indexOfFirstShow = indexOfLastShow - showsPerPage; //0, 6, 12, ...
        const currentShows = this.props.tvshows.slice(indexOfFirstShow, indexOfLastShow); //here: per 6 on each page

        const tvshowItems = this.props.tvshows && currentShows.map((tvshow, index) => <TvshowItem key={tvshow.id} tvshow={tvshow} />)

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.tvshows.length / showsPerPage); i++) { //here: 4 pages
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <span
                    key={ number }
                    id={ number }
                    onClick={ this.handleClick }
                    className={number === this.state.currentPage ? "active" : ""}
                >
                    { number }
                </span>
            );
        });

        return (
            <div className="mainTable">
                <table>
                    <tbody>

                    { tvshowItems }

                    </tbody>
                </table>

                <div id="page-numbers">
                    { renderPageNumbers }
                </div>
            </div>
        );
    }
}

TvshowTable.propTypes = {
    dispatch: PropTypes.func.isRequired,
    tvshows: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
    tvshows: state.tvshows
});

const mapDispatchToProps = dispatch => ({
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvshowTable)
