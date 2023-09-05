import React from "react";
import { Dialog } from "@headlessui/react";


const ContentMovie = ({moviesSingle}) => {
  return (
    <div className="lg:max-w-[60vw]">
      {/* {moviesSingle.videos.results && <iframe className='w-[100%] h-[40vw] min-h-[400px] object-cover' src={`https://www.youtube.com/embed/${moviesSingle.videos.results[0].key}/v=ABCDEFG?controls=0&amp&showinfo=0?&modestbranding=1&autoplay=1&mute=1&controls=0&iv_load_policy=3`} alt="Burger" />} */}
      {/* {<video className="video absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover" src={videoSrc} autoPlay controls />} */}
      <div className="w-[100%] h-[40vw] min-h-[400px] absolute top-0 to-transparent bg-gradient-to-t via-[#00000087] from-[#141414] z-10"></div>
      {moviesSingle?.backdrop_path && (
        <img
          className="w-[100%] h-[40vw] min-h-[400px] object-cover"
          src={
            moviesSingle?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${moviesSingle?.backdrop_path}`
              : ""
          }
          alt="Burger"
        />
      )}
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:ml-4 sm:mt-0">
            <Dialog.Title
              as="h3"
              className="font-semibold leading-6 text-white text-xl"
            >
              {moviesSingle?.title && (
                <p>
                  מידע על{" "}
                  <span className="font-bold">{moviesSingle?.title}</span>
                </p>
              )}
            </Dialog.Title>
            {moviesSingle?.genres && (
              <div className="mt-2 flex ">
                <p className="text-[#777777]">זאנרי'ם: </p>
                {moviesSingle.genres?.map((item) => (
                  <p key={item.id} className="text-white">
                    {item.name},
                  </p>
                ))}
              </div>
            )}
            {moviesSingle?.overview && (
              <div className="mt-2 ">
                <p className="text-md text-white">
                  <span className="text-[#777777]">תיאור: </span>
                  {moviesSingle?.overview}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMovie;
