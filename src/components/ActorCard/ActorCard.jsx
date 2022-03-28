import React from 'react'
import { IMGDOMAIN2 } from 'settingAPI/apiConfig'
import './ActorCard.scss'


export default function ActorCard(props) {
    let { cast } = props
    return (
        <>
            <div className="card ActorCard" >
                <img className="card-img-top" src={`${IMGDOMAIN2}${cast.profile_path}`} alt="Card image" onError={(e)=>{e.target.onerror = null; e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-hjuFaNMnEAp28Q9Mo7x6QK_IyHnKdOqqA&usqp=CAU'}}  />
                <div className="card-body">
                    <h4 className="card-title">{cast.name}</h4>
                    <p className="card-text">{cast.character}</p>
                </div>
            </div>

        </>

    )
}
