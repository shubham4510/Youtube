import React from 'react'
import {useSelector} from 'react-redux'

const SideBar = () => {

  const isSideBarOpen = useSelector(store=>store.toggleSideBar.toggle)


  return isSideBarOpen &&(
    <div className=' w-[15%]   flex flex-col px-3'>
            <h3 className=' font-bold text-xl    mt-2'>Home</h3>
        <ul>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Shorts</li>
            <li className=' opacity-80 text-xl  cursor-pointer border-b-2 border-gray-300 pb-2  mt-2'>Subscriptions</li>
        </ul>
            <h3 className=' font-bold text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>You </h3>
        <ul>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Your channel            </li>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>History     </li>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Playlists          </li>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Your videos         </li>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Watch later    </li>
            <li className=' opacity-80 text-xl cursor-pointer border-b-2 border-gray-300 pb-2   mt-2'>Liked videos        </li>
        </ul>
          
    </div>
  )
}

export default SideBar