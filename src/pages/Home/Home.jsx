
import React,{useEffect} from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel'
import {useSelector,useDispatch} from 'react-redux'
import Lastest from './Lastest'
import NowPlaying from './NowPlaying'
import TopRate from './TopRate'
import { getCarouselAct } from 'redux/actions/HomeCarouselAction'
import { OnPlayingMovieAction,TopRateMovieAction,LastestMovieAction } from 'redux/actions/MovieListAction'
export default function Home(props) {

    //Truyen arr cho Carousel
    const {arrImg} = useSelector(state=>state.CarouselReducer) ;

    //Truyen arr cho MovieList
    const {arrNowPlaying} = useSelector(state=>state.MovieListReducer);
    const {arrLastest} = useSelector(state=>state.MovieListReducer);
    const {arrTopRate} = useSelector(state=>state.MovieListReducer);




    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarouselAct())
        dispatch(OnPlayingMovieAction())
        dispatch(LastestMovieAction())
        dispatch(TopRateMovieAction())
    }, [])




    return (
        <div>
            <HomeCarousel arrImg={arrImg}/>
            
            <NowPlaying arrFilm ={arrNowPlaying}/>
            <TopRate arrFilm ={arrTopRate}/>
            <Lastest arrFilm ={arrLastest}/>

        </div>
    )
}
