import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = ({apipath}) => {
    const {loc}=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },{loc})
  return null
}
