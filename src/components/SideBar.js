import React from 'react'
import { FaHistory, FaHome, FaShoppingBag,FaTv } from 'react-icons/fa'
import { SiYoutubeshorts } from "react-icons/si";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdLiveTv, MdOutlineWatchLater } from 'react-icons/md';
import { RiNewsLine, RiPlayList2Fill } from 'react-icons/ri';
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { LiaDownloadSolid } from 'react-icons/lia';
import { AiFillLike } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.collapse.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-56 h-[calc(100vh-64px)] sticky top-16 shadow-lg px-4 py-3 hover:overflow-y-auto">

      {/* Home */}
      <div className="border-b border-gray-300 pb-3">
        <Link to = "/" ><h1 className="font-bold flex items-center gap-3 my-3">
          <FaHome />
          Home
        </h1> </Link>

        <h1 className="font-bold flex items-center gap-3 my-3">
          <SiYoutubeshorts />
          Shorts
        </h1>
      </div>

      {/* Explore */}
      <div className="border-b border-gray-300 py-3">
        <h1 className="font-bold mb-3">
          Explore
        </h1>

        <ul className="space-y-2">
          <li className="font-semibold flex items-center gap-3">
            <FaShoppingBag />
            Shopping
          </li>

          <li className="font-semibold flex items-center gap-3">
            <IoMusicalNoteOutline />
            Music
          </li>

          <li className="font-semibold flex items-center gap-3">
            <FaTv />
            Movies & TV
          </li>

          <li className="font-semibold flex items-center gap-3">
            <MdLiveTv />
            LIVE
          </li>

          <li className="font-semibold flex items-center gap-3">
            <RiNewsLine />
            News
          </li>

          <li className="font-semibold flex items-center gap-3">
            <MdOutlineSportsKabaddi />
            Sports
          </li>
        </ul>
      </div>

      {/* You */}
      <div className="py-3">
        <h1 className="font-bold mb-3">
          You
        </h1>

        <ul className="space-y-2">
          <li className="font-semibold flex items-center gap-3">
            <CgProfile />
            Your Channel
          </li>

          <li className="font-semibold flex items-center gap-3">
            <FaHistory />
            History
          </li>

          <li className="font-semibold flex items-center gap-3">
            <RiPlayList2Fill />
            Playlists
          </li>

          <li className="font-semibold flex items-center gap-3">
            <MdOutlineWatchLater />
            Watch Later
          </li>

          <li className="font-semibold flex items-center gap-3">
            <LiaDownloadSolid />
            Downloads
          </li>

          <li className="font-semibold flex items-center gap-3">
            <AiFillLike />
            Liked Videos
          </li>
        </ul>
      </div>

    </div>
  );
};

export default SideBar
