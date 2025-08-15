import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const ProtectedComp = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    }, [navigate])
    
    return localStorage.getItem("token") ? children : null
}

export default ProtectedComp