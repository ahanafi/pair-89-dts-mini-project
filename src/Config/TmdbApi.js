import axios from "axios"

const tmdbApiBaseUrl = process.env.REACT_APP_TMDB_BASE_URL;
const tmdbApiKey = `?api_key=${process.env.REACT_APP_API_KEY}`;

const getNowPlayingMovies = async () => {
    try {
        const { data } = await axios.get(`${tmdbApiBaseUrl}movie/now_playing${tmdbApiKey}`);
        const resultData = data.results;
        return resultData.slice(0, 7);
      } catch (error) {
        console.error(error);
        return [];
      }
    
}

const getPopularMovies = () => axios.get(`${tmdbApiBaseUrl}/movies/now_playing${tmdbApiKey}`);

export {
    getNowPlayingMovies, getPopularMovies
}