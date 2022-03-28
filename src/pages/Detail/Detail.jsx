import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

import "./Detail.scss";
import { IMGDOMAIN1,IMGDOMAIN2 } from "settingAPI/apiConfig";
import { getMovieDetailAction } from 'redux/actions/MovieListAction'
import ActorCardSlide from 'components/ActorCardSlide/ActorCardSlide';
import VideoSlide from 'components/VideoSlide/VideoSlide';
import RateMovie from 'components/RateMovie/RateMovie';
import Company from 'components/Company/Company';

export default function Detail(props) {

  const {movieDetail} = useSelector(state => state.MovieListReducer);
  const {movieCredit} = useSelector(state => state.MovieListReducer);
  const {movieVideo} = useSelector(state => state.MovieListReducer);
  const { isLoading } = useSelector(state => state.LoadingReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    let { id } = props.match.params
    console.log('first id',id)
    dispatch(getMovieDetailAction(id));
    window.scrollTo(0, 0)

  }, [])
  console.log( 'filmDetail',movieDetail )
  console.log( 'filmCredit',movieCredit )

  const {genres} = movieDetail
  const renderGenres = ()=>{
    return (genres|| []).map((e,index)=>{
      return <span key={index}> {e.name}, </span>
    })
  }

  const{production_countries}= movieDetail
  const renderCountries = ()=>{
    return  (production_countries|| []).map((e,index)=>{
      return <span key={index}> {e.name}, </span>
    })
  }


  return (

    <>{ !isLoading?
      <div className="Detail" style={{backgroundImage: `url(${IMGDOMAIN1}${movieDetail.backdrop_path})`}}>
      <div className="Detail__content">
      <div className="container" style={{ zIndex: "10", paddingTop: 50 }}>
        <div className="row justify-content-md-center m-4">
          <div className="col-12 col-md-5 col-lg-3">
            <img
              className="float-right"
              style={{ objectFit: "cover",width: "100%", height: 300,borderRadius:'15px' }}
              src={`${IMGDOMAIN2}${movieDetail.poster_path}`} 
              alt=""
            />
          </div>

          <div className="col-12 col-md-7 col-lg-6">
            <div >
              <p className="text-light">
                <b>Release date :</b>  {movieDetail.release_date}
               
              </p>
              <p className="text-light">
                <b>Genres :</b>  {renderGenres()}
              </p>
              <p className="text-light">
                <b>Countries :</b>  {renderCountries()}
              </p>
              <h2 className="text-light">{movieDetail.title}</h2>
              <p className="text-light">{movieDetail.overview}</p>
            </div>
          </div>

          <div className=" col-12 col-lg-3 mt-5 ml-5 ml-md-0">
            
            <Company movieDetail={movieDetail}/>

            
          </div>
        </div>
        <div className='Detail__rate'>
        <RateMovie movieDetail={movieDetail}/>

        </div>


        <div className="Detail__Ovr container bg-white px-5 py-5 mt-5">
        <div className="Detail__Actor">
          <h3>Actor</h3>
          <ActorCardSlide movieCredit={movieCredit}/>
        </div>
        <div className='Detail__Video mt-5'>
        <VideoSlide movieVideo={movieVideo}/>

        </div>
        
        {/* <iframe width="1000" height="500" src="https://www.youtube.com/embed/hL7-aGiNZRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowFullScreen" frameBorder="0"></iframe> */}

      </div>
      </div>
      

      </div>


    </div>: ''
      
    }
    
    </>
    

  )
}

{/* */}