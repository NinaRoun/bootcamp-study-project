import React from 'react';
import style from '../stylesheets/main.styl';
import PropTypes from "prop-types";

const TvshowItem = ({tvshow, search}) => {

    const imgSrc = 'https://image.tmdb.org/t/p/w200' + tvshow.poster_path;
    // search && console.log('search has changed for ' + search);
    // const regexp = new RegExp(search, 'g');
    // const container = document.createElement("span");
    // const toBeWrapped = document.querySelectorAll(".red-highlighting");
    // for (let t = 0; t < toBeWrapped.length; t++)
    //     container.appendChild(toBeWrapped[t]);
    // search && console.log('regexp', regexp);

    const searchEscaped = search.replace(/[\\[.+*?(){|^$]/g, "\\$&");
    const getResultWithSearch = (searchedArea) => {

        const arr = searchedArea.split(new RegExp(searchEscaped, "i"));
        //let resultSearch = [];


        let symbolsParsed = 0;
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            result.push(arr[i]);
            result.push((<span key={i} className={style.searchHighlighting}>{searchedArea.substr(arr[i].length + symbolsParsed, search.length)}</span>));
            symbolsParsed += (arr[i].length + search.length);
        }
        return result;

    }

    return (
        <tr>

            <th> № { tvshow.id } </th>

            <th>
                <h2> { getResultWithSearch(tvshow.name) } </h2>
                <h3> Country: { tvshow.origin_country } </h3>
                <h3> Original Language: { tvshow.original_language } </h3>
                <p> { getResultWithSearch(tvshow.overview) } </p>
            </th>

            <th> <img src={imgSrc} alt={tvshow.name}/> </th>

            <th>
                Rate: { tvshow.vote_average }/10
                <p> Voted { tvshow.vote_count } times</p>
             </th>
        </tr>
    );
}

TvshowItem.propTypes = {
    tvshow: PropTypes.object.isRequired
}

export default TvshowItem;

