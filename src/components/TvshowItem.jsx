import React from 'react';
import style from '../stylesheets/main.styl';
import PropTypes from "prop-types";

const TvshowItem = ({tvshow, search}) => {

    const imgSrc = 'https://image.tmdb.org/t/p/w200' + tvshow.poster_path;
    const searchEscaped = search.replace(/[\\[.+*?(){|^$]/g, "\\$&");

    const getResultWithSearch = (searchedArea) => {

        const arr = searchedArea && searchedArea.split(new RegExp(searchEscaped, "i"));
        let symbolsParsed = 0;
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            result.push(arr[i]);
            result.push((<span key={i} id="searchedArea" className={style.searchHighlighting}>{searchedArea.substr(arr[i].length + symbolsParsed, search.length)}</span>));
            symbolsParsed += (arr[i].length + search.length);
        }
        return result;

    };

    return (
        <tr>

            <th id="tv-id"> № {tvshow.id} </th>

            <th>
                <h2 id="tv-name"> {getResultWithSearch(tvshow.name)} </h2>
                <h3 id="tv-origin"> Country: { tvshow.origin_country } </h3>
                <h3 id="tv-language"> Original Language: { tvshow.original_language } </h3>
                <p id="tv-overview"> { getResultWithSearch(tvshow.overview) } </p>
            </th>

            <th> <img src={imgSrc} alt={tvshow.name}/> </th>

            <th>
                <span id="tv-vote"> Rate: { tvshow.vote_average }/10 </span>
                <p id="tv-vote-count"> Voted { tvshow.vote_count } times </p>
             </th>
        </tr>
    );
}

TvshowItem.propTypes = {
    tvshow: PropTypes.object.isRequired
}

export default TvshowItem;

