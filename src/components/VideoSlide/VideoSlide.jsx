import React from 'react'
import styleSlick from '../RSlick/SlickButton.css'
import Slider from 'react-slick';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}

        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block",left:'-60px' }}
            onClick={onClick}

        >
            <i class="fas fa-backward"></i>
        </div>
    );
}
export default function VideoSlide(props) {
    const {movieVideo} = props;

    const renderVideo = ()=>{
        return  movieVideo.map((e, index) => {
            return <div key={index}>
                <h2>{e.name}</h2>
                <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${e.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowFullScreen" frameBorder="0"></iframe>
            </div>

        })
    }

    const settings = {
        className: "VideoSlide",
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
        rows: 1,
        /* slidesPerRow: 1, */
        slidesToScroll: 1,
        autoplay: false,
        
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="container">




            <Slider {...settings}>

                {renderVideo()}
            </Slider>
        </div>
    );

}
