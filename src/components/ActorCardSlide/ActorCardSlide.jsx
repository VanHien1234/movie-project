import React from 'react';
import Slider from "react-slick";
import styleSlick from '../RSlick/SlickButton.css'
import ActorCard from 'components/ActorCard/ActorCard';



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

const ActorCardSlide = (props) => {



    const { movieCredit } = props;

    console.log('cast', movieCredit)


    const renderActor = () => {

        return  movieCredit.map((cast, index) => {
            return <div key={index}>
                <ActorCard cast={cast} />
            </div>

        })
    };




    const settings = {
        className: "ActorSlide",
        centerMode: false,
        infinite: true,
        slidesToShow: 6,
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

                {renderActor()}
            </Slider>
        </div>
    );
}

export default ActorCardSlide;
