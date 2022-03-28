import React, { Fragment, useEffect } from 'react'
import { Carousel } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './imgHomeCarousel.scss'
import { Link } from 'react-router-dom';
import { IMGDOMAIN1, IMGDOMAIN2 } from 'settingAPI/apiConfig';

export default function HomeCarousel(props) {

    const { arrImg } = props
    console.log('arrIMG', arrImg)





    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div /* className="Carousel" */ key={index}>
                <div className="Carousel" style={{ backgroundImage: `url(${IMGDOMAIN1}${item.backdrop_path})` }}>
                    <div className="Carousel__layer"></div>
                    <div className="container  Carousel__content">
                        <div className="row">
                            <div className="col-8">
                                <h3 className='Carousel__title' > {item.title}</h3>
                                <p className='Carousel__overview text-left'>{`${item.overview}`.length > 200 ? <span>{item.overview.slice(0, 200)} ...</span> : <span>{item.overview}</span>}</p>
                                <div className="Carousel__btn">
                                    <Link to={`/detail/${item.id}`}>
                                        <button className='btn--detail'>DETAIL</button>
                                    </Link>


                                </div>
                            </div>
                            <div className="col-4" style={{borderRadius:'10px'}}>
                                <img className="Carousel__img" src={`${IMGDOMAIN2}${item.poster_path}`} alt="" />
                            </div>

                        </div>

                    </div>
                </div>




                {/* <img className="imgCarousel" src={`${IMGDOMAIN1}${item.backdrop_path}`} alt="" /> */}

            </div>
        })
    }
    return (
        <Fragment>
            <Carousel autoplay>
                {renderImg()}
            </Carousel>
        </Fragment>
    )
}
