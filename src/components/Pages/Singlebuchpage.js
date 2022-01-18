import React from 'react'
import Bookarea from '../Bookarea'
import Footer from '../Footer'
import Header from '../Header'

function Singlebuchpage({reducerState,dispatch}) {
    return (
        <div>
        <Header/>
        <Bookarea reducerState={reducerState} dispatch={dispatch}/>
        <Footer/>
        </div>
    )
}

export default Singlebuchpage
