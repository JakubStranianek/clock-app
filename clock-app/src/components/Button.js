import React, { useState } from 'react'

export default function Button( {setMain} ) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-white w-28 h-10 rounded-3xl flex items-center justify-around hover:cursor-pointer group' onClick={() => {setToggle(!toggle); setMain(!toggle)}}>
        <span className='text-[#808080] text-xs font-bold pl-3 tracking-widest'>{toggle ? "LESS" : "MORE"}</span>
        <div className='bg-black rounded-[28px] w-8 h-8 flex items-center justify-center group-hover:bg-[#808080]'>
            {toggle ?
              <svg width="40" height="40" className='-ml-[3px]' xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6"/></g></svg>
              :
              <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" strokeWidth="2" fill="none" d="m1 1 6 6 6-6"/></svg>
            }
        </div>
    </div>
  )
}
