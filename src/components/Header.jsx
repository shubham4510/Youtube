import React from 'react'

const Header = () => {
  return (
    <nav className=' flex justify-between py-2 px-6 items-center'>
        <div className='flex gap-6'>
            <img className='w-9 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsfTQJ5hbaenzuoO4X0sjYVJByQhC4CsRuw&s" alt="menu-icon" />
            <img className=' w-40 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo" />
        </div>
        
        <div className='flex gap-3  border-2 rounded-full border-gray-300'>
            <input className=' w-[50vh] rounded-l-full px-2 py-1' type="text" placeholder='Search' />
            <button className='w-9 rounded-r-full px-1 py-1 border-l-2  border-gray-300'><img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03e7LTlik-6wlZO5sJXWBItfPsaFgJiwSJg&s" alt="search-icon" /></button>
        </div>
        <div className=' flex gap-3'>
            <img className='w-9 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z-hmhSZp0Zo6EYTASvxr-GPxjOveoS-Ewg&s" alt="menu-icon" />
            <button className=' border-2 border-red-600 text-red-600 bg-transparent rounded-lg px-4 py-2 hover:text-white hover:bg-red-600'>Sign In</button>
        </div>
    </nav>
  )
}

export default Header