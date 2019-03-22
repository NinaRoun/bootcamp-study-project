import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchTvshows } from '../actions'
import SortingCriteria from '../components/SortingCriteria';
import TvshowItem from '../components/TvshowItem';
import Pagination from '../components/Pagination';
import Search from '../components/Search';


class TvshowTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            showsPerPage: 6,
            search: "",
            pageNumbers: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        //console.log('current page is ', this.state.currentPage););
        this.setState({
            currentPage: Number(page)
        })
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        })

        const pageNumbers = [];
        const tableItems = document.getElementsByTagName('tr');
        console.log('length ' + tableItems.length);
        console.log('search = ' + this.state.search);
        for (let i = 1; i <= Math.ceil(tableItems.length / this.state.showsPerPage); i++) {
            pageNumbers.push(i);
        }
        this.setState({
            pageNumbers
        })

    }

    componentWillMount() {
        fetchTvshows()(this.props.dispatch);
    }

    countPages() {
        const pageNumbers = [];
        const tableItems = document.getElementsByTagName('tr');
            console.log('length ' + tableItems.length);
            console.log('search = ' + this.state.search);
            for (let i = 1; i <= Math.ceil(tableItems.length / this.state.showsPerPage); i++) {
                pageNumbers.push(i);
            }
        this.setState({
                    pageNumbers
                })
    }

    render() {

        const {currentPage, showsPerPage} = this.state;

        const indexOfLastShow = currentPage * showsPerPage;  //6, 12, 18, ...
        const indexOfFirstShow = indexOfLastShow - showsPerPage; //0, 6, 12, ...
        const currentShows = this.props.tvshows.slice(indexOfFirstShow, indexOfLastShow); //here: per 6 on each page

        const tvshowItems = this.props.tvshows && currentShows
            .filter(tvshow => !this.state.search ||
                tvshow.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
                tvshow.overview.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            )
            .map(
            (tvshow, index) => <TvshowItem key={tvshow.id} tvshow={tvshow}/>
        );

        const pageNumbers = [];
        //for !this.state.search
        console.log('no search')
        for (let i = 1; i <= Math.ceil(this.props.tvshows.length / showsPerPage); i++) { //here: 4 pages
            pageNumbers.push(i);
        }

        const renderPageNumbers = !this.state.search.length ? pageNumbers.map(number => {
            return (
                <Pagination
                    key={number}
                    id={number}
                    number={number}
                    onClick={this.handleClick}
                    className={number === this.state.currentPage ? "active" : ""}
                />)}) :
            this.state.pageNumbers.map(number => {
                return (
                    <Pagination
                        key={number}
                        id={number}
                        number={number}
                        onClick={this.handleClick}
                        className={number === this.state.currentPage ? "active" : ""}
                    />)})

        return (
            <div className="mainTable">

                <div className="intro">
                    <SortingCriteria />
                    < Search onChange={this.handleChange.bind(this)}/>
                </div>

                <table>
                    <tbody>

                    {tvshowItems}

                    </tbody>
                </table>

                <div id="page-numbers">
                    {renderPageNumbers}
                </div>

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvshowTable, Pagination)

//не могу сделать нормальную пагинацию, уже всяко разно проовала. Думала о такой логике: для search есть handleChange. Каждый раз, когда происходит изменение, происходит перерасчет страниц.
//хотела подсчитывать количество тегов tr и делать что-то вроде:
//const tableItems = document.getElementsByTagName('tr');
//     for (let i = 1; i <= Math.ceil(tableItems.length / showsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//но тогда придется pageNumbers держать в state , выщитывая количество страниц в первый раз, тоже