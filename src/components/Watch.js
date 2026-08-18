import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/collapseSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const Watch = () => {
   const [searchParams] = useSearchParams()
   console.log(searchParams.get('v'))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
   <div>
        <div>
          <iframe width="900" height="450" 
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipBoard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <CommentsContainer/>
    </div>
  )
}

export default Watch
