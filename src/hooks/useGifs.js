// jshint esversion:6
import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner';
import axios from 'axios';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


function useGifs(tag,val) {

    const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${val}`;
    const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);

    async function fetchData(){
        setLoading(true);
        const url=tag ? (tagMemeUrl) : (randomMemeUrl);
        const output=await axios.get(url);
        const dataUrl=(output.data.data.images.downsized_medium.url);
        setGif(dataUrl);
        console.log(dataUrl)
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return {gif,loading,fetchData}

}

export default useGifs