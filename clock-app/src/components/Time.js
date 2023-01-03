import React, { useEffect, useState } from 'react'

export default function Time() {
    var zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
    const [clock, setClock] = useState();

    useEffect(() => {
      setInterval(() => {
        const date = new Date()
        
        setClock(date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          }));
      }, 1000)
    }, [])

    return (
    <div className='text-white flex items-end'>
        <h1 className='text-8xl font-bold'>{clock}</h1>
        <p className='text-[15px] pb-2 pl-2 font-extralight'>{zone}</p>
    </div>
  )
}
