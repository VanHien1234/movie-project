import { keyAPI,baseService } from "settingAPI/apiConfig";





export class MovieApi extends baseService {

        
        fecthAllMovieBanner =()=>{
            return this.get(`movie/popular?api_key=${keyAPI}&language=en-US&page=1`)
        }
        fecthMoviePlayingApi =()=>{
            return this.get(`movie/now_playing?api_key=${keyAPI}&language=en-US&page=1`)
        }
        fecthLastestMovieApi =()=>{
            return this.get(`movie/upcoming?api_key=${keyAPI}&language=en-US`)
        }
        fecthTopRateMovieApi =()=>{
            return this.get(`movie/top_rated?api_key=${keyAPI}&language=en-US&page=1`)
        }
        movieDetailApi = (maPhim ) =>{
            return this.get(`movie/${maPhim}?api_key=${keyAPI}&language=en-US`)
        }
        movieCreditApi = (maPhim ) =>{
            return this.get(`movie/${maPhim}/credits?api_key=${keyAPI}&language=en-US`)
        }
        movieVideoApi = (maPhim ) =>{
            return this.get(`movie/${maPhim}/videos?api_key=${keyAPI}&language=en-US`)
        }

}

/* export const MovieApi = new MovieApi() */
export const fecthAllMovieBanner = new MovieApi().fecthAllMovieBanner
export const fecthMoviePlayingApi = new MovieApi().fecthMoviePlayingApi
export const fecthTopRateMovieApi = new MovieApi().fecthTopRateMovieApi
export const QLMovieApi = new MovieApi()
