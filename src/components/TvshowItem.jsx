import React from 'react';

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
    const arr = tvshow.overview.split(new RegExp(searchEscaped, "i"));
    let result = [];
    let symbolsParsed = 0;
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        result.push((<span class="red-highlighting">{tvshow.overview.substr(arr[i].length + symbolsParsed, search.length)}</span>))
    }

    return (
        <tr>

            <th> № { tvshow.id } </th>

            <th>
                <h2> { search ? tvshow.name : tvshow.name } </h2>
                <h3> Country: { tvshow.origin_country } </h3>
                <h3> Original Language: { tvshow.original_language } </h3>
                <p> { tvshow.overview } </p>
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

//{ search ? tvshow.name.replace(regexp, '<span className="red-highlighting">' + {search} + '</span>') : tvshow.name }
//'<span class="smallcaps">' + value + '</span>'
//search ? tvshow.overview.split(search).join(<span className="red-highlighting">search</span>) : tvshow.overview
