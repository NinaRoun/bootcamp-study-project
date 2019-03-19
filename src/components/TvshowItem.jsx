import React from 'react';

const TvshowItem = ({tvshow}) => {

    const imgSrc = 'https://image.tmdb.org/t/p/w200' + tvshow.poster_path;

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

export default TvshowItem;

//got through const objResult = JSON.parse(result) then objResult.results, array of objects