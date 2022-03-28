import React, { Fragment } from 'react'
import { Button } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import { USER_LOGIN, TOKEN } from 'settingAPI/apiConfig'
import { history } from 'App'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function Header(props) {


    return (
        <Fragment>
            <header className="header">
                <div className="header__content">
                    <div style={{ width: '60%' }} className="header__contactLeft">
                        <Link to={'/'}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsbHzdM5xbSQ8Didd06ED-tN4Dp68yN-XUw&usqp=CAU" alt="" />

                        </Link>
                        
                    </div>
                    <div className="header__contactRight text-center">
                        <ul className='pt-2'>
                            <Link to = {'/'}><li><b>HOME</b></li></Link>
                            <li><b>MOVIE</b></li>
                            <li><b>TV SERIES</b></li>
                            
                            
                        </ul>
                    </div>
                </div>
            </header>



        </Fragment>

    )
}
