import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryItem = (props) => {
  return (
    <GalleryCard>
      <div className="inset-0 overflow-hidden bg-black z-30 absolute opacity-40  p-10 text-white"></div>
      <div className="w-full z-50 absolute top-2 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out p-2 text-white">
        <div className="px-3 w-full">
          <h1 className="font-brand inline-block font-thin bg-[#1E232B] m-2 px-5 py-3 text-white text-3xl">
            {props.photoTitle}
          </h1>
          <br />
          <h1 className="font-brand inline-block font-thin bg-[#1E232B] m-2 px-5 py-3 text-white text-sm">
            {props.galleryTitle}
          </h1>
        </div>
      </div>
      <img
        alt="gallery"
        className=" group-hover:scale-110 transition duration-500 ease-in-out !w-full h-full"
        src={props.image}
      />
    </GalleryCard>
  );
};

export default GalleryItem;
