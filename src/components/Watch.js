import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/collapseSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { CgProfile } from "react-icons/cg";
import { addLiveChat, removeChat } from "../utils/chatSlice";
import { generateName, generateMessage } from "../utils/constants";

const Watch = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const chats = useSelector((store) => store.chat);

  useEffect(() => {
    dispatch(closeMenu());

    const interval = setInterval(() => {
      dispatch(
        addLiveChat({
          username: generateName(),
          message: generateMessage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
      dispatch(removeChat());
    }
  }, [dispatch]);

  return (
    <div>
      <div className="flex">

        {/* YouTube Video */}
        <div>
          <iframe
            width="900"
            height="450"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v")
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div className="w-full max-w-[450px] h-[450px] mx-5 border border-gray-300 rounded-xl shadow-sm flex flex-col overflow-y-auto">

          {/* Header */}
          <div className="px-5 py-3 border-b border-gray-200">
            <h1 className="font-bold text-lg">
              Live Chat
            </h1>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4  flex flex-col justify-end">

            <ul className="space-y-4">

              {chats.map((chat, index) => (
                <li
                  key={index}
                  className="flex gap-2"
                >
                  <CgProfile className="size-6 shrink-0" />

                  <div>
                    <p className="font-semibold text-sm">
                      @{chat.username}
                    </p>

                    <div className="mt-1 bg-gray-100 rounded-lg px-3 py-2">
                      <p className="text-sm">
                        {chat.message}
                      </p>
                    </div>
                  </div>
                </li>
              ))}

            </ul>

          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex gap-2">

            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
            />

            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600">
              Send
            </button>

          </div>

        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default Watch;