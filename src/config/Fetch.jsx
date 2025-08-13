import React, { use, useEffect, useState } from 'react'

export const Fetch = (apipath,query='') => {
    const [data,setData]=useState([])
    const key=import.meta.env.VITE_API_KEY
    const url=`https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${query}`
    useEffect(()=>{
        async function fetchMovies(){
            const res = await fetch(url);
            const json = await res.json();
            setData(json.results );
        }
        fetchMovies()
    },[url])
  return  {data:data }
}
