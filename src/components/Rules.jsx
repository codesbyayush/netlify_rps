import React from 'react'
import rules from '../assets/image-rules.svg'
export default function Rules( {setopen}) {
  return (
    <>
      <div className='flex justify-between w-full p-8 uppercase font-bold text-xl'>
        <h1>Rules</h1>
        <button onClick={setopen} className='text-2xl w-8 h-4 text-headerOutlineColor'>*</button>
      </div>
      <div className='px-8'>
        <img src={rules} alt="" className='w-full h-full mx-auto contrast-25'/>
      </div>
    </>
  )
}
