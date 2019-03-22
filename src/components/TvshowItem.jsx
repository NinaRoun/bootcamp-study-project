import React from 'react';

import PropTypes from "prop-types";

const TvshowItem = ({tvshow, search}) => {

    const imgSrc = 'https://image.tmdb.org/t/p/w200' + tvshow.poster_path;
    //const regexp = new RegExp(search, 'g');
    //console.log('regexp', regexp);

    return (
        <tr>

            <th> № { tvshow.id } </th>

            <th>
                <h2> { tvshow.name } </h2>
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