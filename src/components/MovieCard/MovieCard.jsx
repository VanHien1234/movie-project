import React, { Fragment } from 'react'
import './MovieCard.css'
import { Button, Radio } from 'antd';

import { Link } from 'react-router-dom';
import { IMGDOMAIN2 } from 'settingAPI/apiConfig';
import { white } from 'tailwindcss/colors';


export default function MovieCard(props) {
    
    const { film } = props;
    console.log('film card',film)

    return (
        <Link to={`/detail/${film.id}`} >
            <div className="movie-card text-center " style={{ padding: '10px' }} >
            <div className="movie-header" style={{ backgroundImage: `url(${IMGDOMAIN2}${film.poster_path})` }} >
            <div className="header-icon-container">
                    <div className=' header-icon-rate'>
                    <b>{film.vote_average}</b><i class="fas fa-star" style={{color:'white'}}></i>

                    </div>
                    <div className=' header-icon-lang'>
                    <b>{film.original_language}</b>

                    </div>

                </div>
            </div>
            <div className="movie-content" /* style={{backgroundColor : 'red'}} */>
                <div className="movie-content-header">
                    
                        <h3 className="movie-title">{`${film.title}`.length > 17 ? <span>{film.title.slice(0, 17)} ...</span> : <span>{film.title}</span>}</h3>
                    
                    <div className="row mt-2 pl-3 " >
    
                        
                        <div className='movie-title-original'>
                        Original title : <b> {`${film.original_title}`.length > 14 ? <span>{film.original_title.slice(0, 14)} ...</span> : <span>{film.original_title}</span>}</b>
                        </div>
                        
                    </div>

                </div>
                <div className="movie-info">
                    <div className="info-section">
                        <label>Date &amp; Time</label>
                        <span>{film.release_date}</span>
                    </div>{/*date,time*/}
                    
                    <div className="info-section text-center">
                        <label >Popularity</label>
                        <span> {film.popularity}<i className="fas fa-fire ml-2" style={{color:'#FF0000',fontSize:'17px'}}> </i></span>
                        
                    </div>{/*row*/}
                    
                </div>
            </div>{/*movie-content*/}
        </div>

        </Link>
        
    )
}
