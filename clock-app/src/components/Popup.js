import React from 'react'

export default function Popup(props) {


  return (
    <div className={props.setPopup <= 17 ? 'absolute bottom-0 z-50 bg-white/75 bg-clip-padding backdrop-blur-sm w-full'
                    : "absolute bottom-0 z-50 bg-black/75 bg-clip-padding backdrop-blur-sm w-full"}>
        <div className='w-11/12 mx-auto md:w-10/12 lg:w-3/4 py-12 md:py-28'>
        <menu className='md:flex md:justify-start'>
            <div>
                <section className='flex items-center justify-between md:flex-col md:items-start md:mb-12'>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " uppercase text-[10px] tracking-[2px] md:text-[13px] lg:text-[15px]"}>CURRENT TIMEZONE</div>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " text-xl font-bold md:text-4xl lg:text-[56px] lg:pt-2"}>Europe/London</div>
                </section>

                <section className='flex items-center justify-between my-4 md:flex-col md:items-start md:my-0'>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " uppercase text-[10px] tracking-[2px] md:text-[13px] lg:text-[15px]"}>Day of the year</div>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " text-xl font-bold md:text-4xl lg:text-[56px] lg:pt-2"}>295</div>
                </section>
            </div>

            <div className='md:ml-20 lg:ml-36 lg:border-l-[1px] border-[#303030]'>
                <section className='flex items-center justify-between md:flex-col md:items-start md:mb-12 lg:pl-24'>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " uppercase text-[10px] tracking-[2px] md:text-[13px] lg:text-[15px]"}>Day of the week</div>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " text-xl font-bold md:text-4xl lg:text-[56px] lg:pt-2"}>5</div>
                </section>

                <section className='flex items-center justify-between mt-4 md:flex-col md:items-start md:mt-0 lg:pl-24'>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " uppercase text-[10px] tracking-[2px] md:text-[13px] lg:text-[15px]"}>Week number</div>
                    <div className={(props.setPopup <= 17 ? 'text-[#303030]' : 'text-white') + " text-xl font-bold md:text-4xl lg:text-[56px] lg:pt-2"}>42</div>
                </section>
            </div>
        </menu>
        </div>
    </div>
  )
}
