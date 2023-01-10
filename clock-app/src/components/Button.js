import React from 'react'

export default function Button() {
  return (
    <div className='bg-white w-28 h-10 rounded-3xl flex items-center justify-around'>
        <span className='text-[#808080] text-xs font-bold pl-3 tracking-widest'>MORE</span>
        <div className='bg-black rounded-[28px] w-8 h-8 flex items-center justify-center'>
            <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" stroke-width="2" fill="none" d="m1 1 6 6 6-6"/></svg>
        </div>
    </div>
  )
}
