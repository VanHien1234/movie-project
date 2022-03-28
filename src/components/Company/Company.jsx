import React, { useState } from 'react'
import { IMGDOMAIN2 } from 'settingAPI/apiConfig';
import './Company.scss'
export default function Company(props) {

    const{movieDetail}= props;
    const {production_companies}=movieDetail
/*     const [arrA,setarrA]= useState([])
    setarrA(movieDetail.production_companies) */
    console.log('arraya',production_companies)
    const renderCompany=()=>{
        return (production_companies || []).map((e,index)=>{
            return <li className='Company' key={index}>
                <img className='Company__logo' src={`${IMGDOMAIN2}${e.logo_path}`} alt="" onError={(e)=>{e.target.onerror = null; e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT8Hk-IBTIbhwIYoSP4tznyKeBMZ4pWJ2Uw&usqp=CAU'}} />
                <p className='Company__brand'>{e.name}</p>
            </li>
        })

    }
  return (
    <>
    <ul>
      {renderCompany()}
    </ul>
    </>
  )
}
