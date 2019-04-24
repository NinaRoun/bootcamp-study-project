import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchTvshows } from '../actions';
import SortingCriteria from '../components/SortingCriteria';
import TvshowItem from '../components/TvshowItem';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Loading from '../components/Loading';
import Error from '../components/Error';
import style from '../stylesheets/main.styl';

class TvshowTable extends Component {

    constructor(props) {

        super(props);
        this.state = {
            currentPage: 1,
            showsPerPage: 6,
            search: "",
            pageNumbers: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        this.setState({
            currentPage: Number(page)
        })
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        })

    }

    componentWillMount() {
        fetchTvshows()(this.props.dispatch);
    }

    render() {

        const { currentPage, showsPerPage, search } = this.state;

        //filters tv-shows according to search value
        const allShows = !this.state.search ? this.props.tvshows : this.props.tvshows.filter(tvshow => !this.state.search ||
            tvshow.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
            tvshow.overview.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
        );

        //defines the list of tv-shows to render on the current page
        const indexOfLastShow = currentPage * showsPerPage;
        const indexOfFirstShow = indexOfLastShow - showsPerPage;
        const currentShows = allShows.slice(indexOfFirstShow, indexOfLastShow);

        //renders the whole list of tv-shows
        const tvshowItems = this.props.tvshows && currentShows
            .map(
            (tvshow, index) => <TvshowItem key={tvshow.id} tvshow={tvshow} search={search}/>
        );

        //counts the number of pages
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allShows.length / showsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Pagination
                    key={number}
                    id={number}
                    number={number}
                    onClick={this.handleClick}
                    className={number === this.state.currentPage ? style.active : ""}
                />)});

        return (
            <div className={style.mainTable}>

                {this.props.isLoading ? <Loading /> : this.props.error ? <Error error={this.props.error} /> :

                    <div>

                        <div className={style.options}>
                            <SortingCriteria />
                            <Search onChange={this.handleChange.bind(this)}/>
                        </div>

                        <table>
                            <tbody>

                            {tvshowItems}

                            </tbody>
                        </table>

                        <div id={style.pageNumbers}>
                            {renderPageNumbers}
                        </div>

                    </div>

                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    tvshows: state.tvshowsData.tvshows,
    isLoading: state.tvshowsData.isLoading,
    error: state.tvshowsData.error
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvshowTable, Pagination)

