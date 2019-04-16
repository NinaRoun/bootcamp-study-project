import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTvshows } from '../actions'
import SortingCriteria from '../components/SortingCriteria';
import TvshowItem from '../components/TvshowItem';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Loading from '../components/Loading';
import style from '../stylesheets/main.styl';
import Error from '../components/Error';


class TvshowTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            showsPerPage: 6,
            search: "",
            pageNumbers: [],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        this.setState({
            currentPage: Number(page)
        })
    }

    handleChange(event) {
        this.setState({
            search: event.currentTarget.value
        })
    }

    componentWillMount() {
        this.props.fetchTvShows();
    }

    render() {

        const {currentPage, showsPerPage, search} = this.state;

        const allShows = !this.state.search ? this.props.tvshows : this.props.tvshows.filter(tvshow => !this.state.search ||
            tvshow.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
            tvshow.overview.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
        );

        const indexOfLastShow = currentPage * showsPerPage;  //6, 12, 18, ...
        const indexOfFirstShow = indexOfLastShow - showsPerPage; //0, 6, 12, ...
        const currentShows = allShows.slice(indexOfFirstShow, indexOfLastShow); //here: per 6 on each page

        const tvshowItems = this.props.tvshows && currentShows
            .map(
            (tvshow, index) => <TvshowItem key={tvshow.id} tvshow={tvshow} search={search}/>
        );

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allShows.length / showsPerPage); i++) { //here: 4 pages
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
    tvshows: state.tvshows,
    isLoading: state.isLoading,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    console.log(dispatch, typeof fetchTvshows());
    return {
        fetchTvShows: () => dispatch(fetchTvshows())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvshowTable, Pagination)

