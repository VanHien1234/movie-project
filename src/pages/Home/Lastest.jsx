import React from 'react'
import MultipleRows from 'components/RSlick/MultipleRows'
import './Title.scss'

export default function Lastest(props) {
    const {arrFilm} = props

    return (
        
        <div className ="container mt-5">
            <h3 className='neonTitle neon--last text-left' > Lastest Movie</h3>
            <MultipleRows arrFilm={arrFilm}/>
           
        </div>
        
        
        
        
        

    )
}
