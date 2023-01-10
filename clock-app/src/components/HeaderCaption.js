import React from 'react'

export default function HeaderCaption() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className='pt-8 flex'>
      <div className='w-11/12 text-white text-xs md:w-2/3 md:text-base'>
        <p className='leading-6'>
          “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
        </p>
      
      <h1 className='font-bold pt-2'>Ada Lovelace</h1>
      </div>
        <svg width="40" height="40" className='pl-4 cursor-pointer opacity-50 hover:opacity-100' onClick={handleRefresh} xmlns="http://www.w3.org/2000/svg"><path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fillRule="nonzero"/></svg>
    </div>
  )
}
