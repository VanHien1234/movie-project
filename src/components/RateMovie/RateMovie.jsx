import React from 'react'
import { Rate } from "antd";
import './RateMovie.scss'

export default function RateMovie(props) {

    const { movieDetail } = props;
    return (
        <>
        <div className='row'>
            <div className="col-9">
            <div>
                <div className="circle circle--sunrise">
                    <div className="circle__content">
                        <h3 className="circle__content__headline">{movieDetail.budget}$</h3>
                        <p className='circle__content__title'>Budget</p>
                    </div>
                </div>
                <div className="circle circle--timber">
                    <div className="circle__content">
                        <h3 className="circle__content__headline">{movieDetail.popularity}</h3>
                        <p className='circle__content__title' >Popularity</p>
                    </div>
                </div>
                <div className="circle circle--mojito">
                    <div className="circle__content">
                        <h3 className="circle__content__headline">{movieDetail.revenue}$</h3>
                        <p className='circle__content__title' >Revenue</p>
                    </div>
                </div>
            </div>

            </div>
            <div className="col-3 rating text-center">
            <h2>RATING</h2>
            <h1 className=" d-sm--inline-block">
                <Rate
                    
                    /* allowHalf */
                    value={movieDetail.vote_average / 2}
                    style={{ color: "#FADB14", fontSize: '30px' }}
                />
                <p>{movieDetail.vote_average}</p>
            </h1>
            </div>
        </div>
            


            

        </>
    )
}
