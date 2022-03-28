import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MovieCard from 'components/MovieCard/MovieCard'
import MultipleRows from 'components/RSlick/MultipleRows'



export default function NowPlaying(props) {

    const {arrFilm} = props

    return (
        
        <div className ="container mt-5">
            <h3 className='neonTitle neon--now text-left' > Now Playing Movie</h3>
            <MultipleRows arrFilm={arrFilm}/>
           
        </div>

    )
}
