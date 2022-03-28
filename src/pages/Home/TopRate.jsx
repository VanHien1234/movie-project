import React from 'react'
import MultipleRows from 'components/RSlick/MultipleRows'

export default function TopRate(props) {
    const {arrFilm} = props

    return (
        
        <div className ="container mt-5">
            <h3 className='neonTitle neon--top text-left' > Top Rate Movie</h3>
            <MultipleRows arrFilm={arrFilm}/>
           
        </div>

    )
}

