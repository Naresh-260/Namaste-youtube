import React from 'react'
import { comments } from '../utils/constants'
import { CgProfile } from 'react-icons/cg'
import { BiLike, BiDislike } from 'react-icons/bi'
const CommentsContainer = () => {
  return (
    <div className="w-full max-w-4xl px-4 py-6">

      {/* Heading */}
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Comments
      </h1>

      {/* Comments */}
      <div>
        {comments.map((commentInfo, index) => (
          <Comment
            key={index}
            commentInfo={commentInfo}
          />
        ))}
      </div>

    </div>
  )
}

export const Comment = ({ commentInfo }) => {

  const { name, comment, reply } = commentInfo

  return (
    <div className="mt-6">

      {/* Main comment */}
      <div className="flex gap-4">

        {/* Profile */}
        <div className="flex-shrink-0">
          <CgProfile className="text-4xl text-gray-500" />
        </div>

        {/* Comment content */}
        <div className="flex-1">

          {/* User name */}
          <h2 className="text-sm font-semibold text-gray-900">
            {name}
          </h2>

          {/* Comment */}
          <p className="mt-1 text-sm text-gray-800 leading-6">
            {comment}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-1 mt-2">

            <button className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-gray-100 transition">
              <BiLike className="text-xl" />
              <span className="text-xs">Like</span>
            </button>

            <button className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-gray-100 transition">
              <BiDislike className="text-xl" />
              <span className="text-xs">Dislike</span>
            </button>

            <button className="rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-gray-100 transition">
              Reply
            </button>

          </div>

          {/* Replies */}
          {reply.length > 0 && (
            <div className="mt-3 ml-2 pl-5 border-l-2 border-gray-200">

              {reply.map((replyInfo, index) => (
                <Comment
                  key={index}
                  commentInfo={replyInfo}
                />
              ))}

            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default CommentsContainer

