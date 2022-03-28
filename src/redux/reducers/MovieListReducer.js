

import { FETCH_ALL_MOVIE, FETCH_PHIM_DANG_CHIEU,FETCH_TOP_RATE,FETCH_PHIM_SAP_CHIEU, GET_MOVIE_DETAIL,FETCH_CHI_TIET_PHIM } from "redux/types/MovieListType"


 
const stateDefault ={
    arrFilm : [{}],
    arrNowPlaying: [],
    arrLastest:[],
    arrTopRate:[],
    arrFilmBackup:[],

    movieDetail:[],
    movieCredit:[],
    movieVideo:[],


    arrMovieDetailAdmin:[{

    }],


    
}

export const MovieListReducer = (state = stateDefault,action) =>{
    let clonedState = { ...state }

    switch(action.type){
        case FETCH_ALL_MOVIE :{
            clonedState.arrFilm= action.arrFilm
            clonedState.arrFilmBackup= clonedState.arrFilm
            return clonedState
        }
        case FETCH_PHIM_DANG_CHIEU:{
            clonedState.arrNowPlaying = action.arrFilm
            console.log('phim dang chieu',clonedState.arrNowPlaying)
            return  clonedState
        }
        case FETCH_PHIM_SAP_CHIEU:{
            clonedState.arrLastest = action.arrFilm
            console.log('phim sap chieu',clonedState.arrLastest)
            return  clonedState
        }
        case FETCH_TOP_RATE:{
            clonedState.arrTopRate = action.arrFilm
            console.log('phim top rate',clonedState.arrTopRate)
            return  clonedState
        }
        case GET_MOVIE_DETAIL:{
            clonedState.movieDetail = action.arrMovieDetail
            clonedState.movieCredit = action.arrMovieCredit
            clonedState.movieVideo = action.arrMovieVideo
            return clonedState

        }


        default : return clonedState
    }
}