import {fecthAllMovieApi,fecthMoviePlayingApi,fecthTopRateMovieApi, QLMovieApi} from 'Api/MovieApi'
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import {  FETCH_PHIM_DANG_CHIEU, FETCH_PHIM_SAP_CHIEU,FETCH_TOP_RATE, GET_MOVIE_DETAIL} from 'redux/types/MovieListType'



export const OnPlayingMovieAction =()=>{

    return async (dispatch) =>{
        try {
            const result = await fecthMoviePlayingApi()
            console.log('all movie',result.data.results )
            dispatch({
                type : FETCH_PHIM_DANG_CHIEU,
                arrFilm : result.data.results
            })

        }catch(errors){
            console.log('error',errors)
        }
    }
}
export const LastestMovieAction =()=>{

    return async (dispatch) =>{
        try {
            const result = await QLMovieApi.fecthLastestMovieApi()
            console.log('lastest movie',result )
            dispatch({
                type : FETCH_PHIM_SAP_CHIEU,
                arrFilm : result.data.results
            })

        }catch(errors){
            console.log('error',errors)
        }
    }
}
export const TopRateMovieAction =()=>{

    return async (dispatch) =>{
        try {
            const result = await fecthTopRateMovieApi()
            console.log('toprate movie',result.data.results )
            dispatch({
                type : FETCH_TOP_RATE,
                arrFilm : result.data.results
            })

        }catch(errors){
            console.log('error',errors)
        }
    }
}
export const getMovieDetailAction = (maPhim) =>{
    return async (dispatch) =>{
        try{
            dispatch(displayLoadingAction)
            const movieDetail = await QLMovieApi.movieDetailApi(maPhim)
            const movieCredit = await QLMovieApi.movieCreditApi(maPhim)
            const movieVideo = await QLMovieApi.movieVideoApi(maPhim)

            console.log('getmoviedetail',movieDetail.data)
            console.log('movieCredit',movieCredit.data)
            console.log('movieVideo',movieVideo)

            
            dispatch({
                type : GET_MOVIE_DETAIL,
                arrMovieDetail : movieDetail.data,
                arrMovieCredit : movieCredit.data.cast,
                arrMovieVideo :  movieVideo.data.results
            }
            )
            await dispatch(hideLoadingAction);
        }
        catch(error){
            console.log('error movie detail',error)
            dispatch(hideLoadingAction);
        }
    }
}




