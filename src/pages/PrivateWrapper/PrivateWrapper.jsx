import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateWrapper() {
    let auth = (localStorage.getItem("token")===null?false:true)
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateWrapper