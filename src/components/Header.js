import React from 'react'
import { hamberger_img, profile_icon, search_icon, youtube_icon } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { openAndCloseMenu } from '../utils/collapseSlice'

const Header = () => {
  const dispatch = useDispatch()

  const handletoggleSideBar = ()=>{
    dispatch(openAndCloseMenu())
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 fixed top-0 left-0 right-0 bg-white'>
      <div className= 'col-span-1 flex'>
        <img src={hamberger_img} alt='hamburger_logo' className='h-12' onClick={handletoggleSideBar}/>
        <img src = {youtube_icon} alt='youtube_icon' className='h-12'/>
      </div>

      <div className='col-span-10 flex justify-center'>
        <input type='text' placeholder = 'search' className='border border-gray-600 px-20 rounded-l-full'/>
            <div className="border border-gray-600 rounded-r-full px-5 flex items-center justify-center">
                <img
                src={search_icon}
                alt="search_icon"
                className="h-6 w-6"
                />
            </div>
      </div>

      <div className='col-span-1'>
        <img src= {profile_icon} alt='profile_icon' className='h-12'/>
      </div>

    </div>
  )
}

export default Header
