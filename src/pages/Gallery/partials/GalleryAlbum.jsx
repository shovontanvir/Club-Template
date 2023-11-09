import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryAlbum = ({ gallery, order }) => {
  console.log(gallery);
  return (
    <div className="flex flex-wrap flex-col sm:flex-row">
      <div className={`basis-1/2 p-2 group ${order}`}>
        <GalleryCard
          image={gallery.images[0].image}
          photoTitle={gallery.images[0].title}
          galleryTitle={gallery.title}
        />
      </div>
      <div className="basis-1/2 flex flex-wrap">
        {gallery.images
          .filter((image, index) => index != 0)
          .map((image, index) => (
            <div className="basis-1/2 p-2 group">
              <GalleryCard
                key={index.toString()}
                image={image.image}
                photoTitle={image.title}
                galleryTitle={gallery.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryAlbum;
