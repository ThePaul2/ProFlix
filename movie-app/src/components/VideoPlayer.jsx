import React from "react";
import Video from "../assets/video.mp4";
import { FilmIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  return (
    <div className="relative">
      {/* Video Player */}
      <video
        className="w-full h-screen object-cover"
        style={{ height: "80vh" }}
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Logo */}
        <Link to="/">
          <div className="font-bold text-9xl text-red-600 cursor-pointer flex items-center gap-1">
            <FilmIcon className="w-28 h-28 text-red-600" />
            <span>ProFlix</span>
          </div>
        </Link>

        {/* Buttons */}
        <div className="flex mt-4">
          <Link
            to="/movies"
            className="mr-4 rounded-full border border-red-500 p-3 px-6 hover:bg-white transition duration-300 ease-in-out"
          >
            <span className="text-red-500 font-bold">Movies</span>
          </Link>
          <Link
            to="/events"
            className="rounded-full border border-red-500 p-3 px-6 hover:bg-white transition duration-300 ease-in-out"
          >
            <span className="text-red-500 font-bold">Promos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
