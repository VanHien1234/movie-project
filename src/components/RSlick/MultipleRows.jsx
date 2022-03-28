import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from 'components/MovieCard/MovieCard'

import styleSlick from './SlickButton.css';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{  ...style, display: "block"}}
      onClick={onClick}
      
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block",left:'-45px' }}
      onClick={onClick}
      
    >
      <i class="fas fa-backward"></i>
    </div>
  );
}

export default function MultipleRows(props) {



  const { arrFilm } = props;
  console.log('arrFilm',arrFilm)


  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return <div key={index}>
        <MovieCard film={film} />
      </div>

    })
  };




  const settings = {
    /* className: "center",
    centerMode: false, */
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    /* slidesPerRow: 1, */
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container">

      



      <Slider {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  );
}

