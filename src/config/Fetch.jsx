import React, { use, useEffect, useState } from 'react'

export const Fetch = (apipath,query='') => {
    const [data,setData]=useState([])
    const key='83498be9aef4cdc05b538b6b32f7c72c'
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
