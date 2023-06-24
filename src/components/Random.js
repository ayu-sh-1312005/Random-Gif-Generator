import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
    
    const {gif,loading,fetchData}=useGifs(false);

    function clickHandler(event){
      fetchData();
    };
  return (
    <div className='flex flex-col bg-lime-500 rounded-lg border-2 border-gray-600  w-[50%] items-center gap-2 p-2'>
        <h3 className='font-bold p-3 text-2xl'>A RANDOM GIF</h3>
        {!loading ?
        (<img src={gif} className='h-[80%] w-[480px]  ' alt='' />):<Spinner />
         }

        <button onClick={clickHandler} className='bg-lime-200 rounded-md p-4 w-[90%]'>GENERATE</button>

    </div>
  )
}

export default Random