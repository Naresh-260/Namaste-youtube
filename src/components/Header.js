import React, { useEffect, useState } from 'react'
import {
  hamberger_img,
  profile_icon,
  search_icon,
  youtube_icon,
  Youtube_search_suggestion_API
} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { openAndCloseMenu } from '../utils/collapseSlice'
import { CiSearch } from 'react-icons/ci'

const Header = () => {

  const dispatch = useDispatch()

  const [searchContent, setSearchContent] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handletoggleSideBar = () => {
    dispatch(openAndCloseMenu())
  }

  const searchSuggestions = async () => {

    if (!searchContent.trim()) {
      setSearchResult([])
      return
    }

    const data = await fetch(
      Youtube_search_suggestion_API + searchContent
    )

    const json = await data.json()

    setSearchResult(json[1])
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      searchSuggestions()
    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [searchContent])

  return (
    <>
      {/* Header */}
      <div className="grid grid-flow-col shadow-lg p-2 fixed top-0 left-0 right-0 bg-white z-50"
       onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}>

        {/* Left */}
        <div className="col-span-1 flex items-center">
          <img
            src={hamberger_img}
            alt="hamburger_logo"
            className="h-12 cursor-pointer"
            onClick={handletoggleSideBar}
          />

          <img
            src={youtube_icon}
            alt="youtube_icon"
            className="h-12"
          />
        </div>


        {/* Search */}
        <div className="col-span-10 flex justify-center">

          {/* Search container */}
          <div className="relative w-1/2">

            {/* Search input */}
            <div className="flex">

              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-600 px-5 py-2 rounded-l-full outline-none focus:border-blue-500"
                value={searchContent}
                onChange={(e) => {
                  setSearchContent(e.target.value)
                }}
              />

              <div className="border border-gray-600 rounded-r-full px-5 flex items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100">
                <img
                  src={search_icon}
                  alt="search_icon"
                  className="h-6 w-6"
                />
              </div>

            </div>


            {/* Suggestions */}
            {showSuggestions && searchResult.length > 0 && searchContent && (

              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                <ul className="py-2">

                  {searchResult.slice(0, 8).map((result, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >

                      <CiSearch className="text-xl text-gray-500" />

                      <span className="text-sm font-medium">
                        {result}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            )}

          </div>

        </div>


        {/* Profile */}
        <div className="col-span-1 flex justify-center">
          <img
            src={profile_icon}
            alt="profile_icon"
            className="h-12"
          />
        </div>

      </div>
    </>
  )
}

export default Header
