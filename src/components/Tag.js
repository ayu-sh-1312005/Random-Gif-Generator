// jshint esversion:6
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  const [val,setVal]=useState('');
  const {gif,loading,fetchData}=useGifs(true,val);


  function handleChange(event){
    setVal(event.target.value)
  }


  function clickHandler(event){
    fetchData();
  };
  return (
    <div className='flex flex-col w-[50%] rounded-lg border-2 border-gray-600 bg-blue-400 items-center gap-3 p-2'>
        <h3 className='font-bold p-3 text-2xl uppercase'>RANDOM {val.trim()} GIF</h3>
        {!loading ?
          (<img  width={450} className='h-[80%]  w-[480px]' src={gif} alt="" />):
          ( <Spinner />)
        }
        <input onChange={handleChange} className='w-[90%] px-3 py-2 rounded-md text-center text-xl' type="text" value={val} placeholder='' />
        <button onClick={clickHandler} className='bg-blue-200 rounded-md p-4 w-[90%]'>GENERATE</button>
    </div>
  )
}
export default Tag