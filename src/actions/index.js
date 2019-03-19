import { FETCH_TVSHOWS } from './types'

export const fetchTvshows = () => dispatch => {

    const tvshowsRequest = new XMLHttpRequest();
    const simplePromise = new Promise((resolve, reject)=>{
        tvshowsRequest.open("GET", "https://api.themoviedb.org/3/tv/popular?api_key=eaa4854fc14c0423809d014974235e94&language=en-US&page=1");
        tvshowsRequest.addEventListener("load", function(data){
            //console.log("data " , this.responseText);
            resolve(this.responseText)
        });
        tvshowsRequest.send();
    });

    simplePromise.then(result => {
        const objResult = JSON.parse(result)
        console.log(objResult.results);
        const tvshows = objResult.results;
        return dispatch({
            type: FETCH_TVSHOWS,
            payload: tvshows
        })
    });
}



