import React from "react";
import ClassicBg from "../components/ClassicBg";
import GalleryAlbum from "../components/GalleryAlbum";
import gallery from "../dummydata/Gallery";
const GalleryPage = () => {
  return (
    <>
      <ClassicBg headline="Images Gallery" bgClass="bg-classic" />
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-8 md:py-16">
        {gallery.map((item, index) => (
          <GalleryAlbum
            key={index.toString()}
            gallery={item}
            order={index % 2 !== 0 ? "sm:order-1" : "sm:order-0"}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
