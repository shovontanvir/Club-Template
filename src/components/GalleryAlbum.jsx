import React from "react";
import GalleryItem from "../components/GalleryItem";
const GalleryAlbum = (props) => {
  const singleGallery = props.gallery;
  const galleryTitle = singleGallery.title;
  let featuredImage;
  const images = [];
  singleGallery.images.map((item, index) =>
    index === 0 ? (featuredImage = item) : images.push(item)
  );
  console.log(featuredImage);
  console.log(images);

  return (
    <div className="flex flex-wrap flex-col sm:flex-row">
      <div className={`basis-1/2 p-2 group ${props.order}`}>
        <GalleryItem
          image={featuredImage.image}
          photoTitle={featuredImage.title}
          galleryTitle={galleryTitle}
        />
      </div>
      <div className="basis-1/2 flex flex-wrap">
        {images.map((image, index) => (
          <div className="basis-1/2 p-2 group">
            <GalleryItem
              key={index.toString()}
              image={image.image}
              photoTitle={image.title}
              galleryTitle={galleryTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAlbum;
