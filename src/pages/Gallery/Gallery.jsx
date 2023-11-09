import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import GalleryAlbum from "./partials/GalleryAlbum";

const Gallery = () => {
  const getGalleryData = () => {
    return getApiData("gallery");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["gallery"],
    getGalleryData
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const gallery = data;

  return (
    <>
      <ClassicHeader headline="Image Gallery" bgClass="bg-classic" />
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

export default Gallery;
