import React from 'react'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './Layout/Header/Header'
import Footer  from './Layout/Footer/Footer';


export const HomeTemplate =(props) =>{
    const {Component,...restProps} =props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>

            <Header/>

            <Component {...propsRoute}/>

            <Footer/>


        </Fragment>

    }}/>
}

