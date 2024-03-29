import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ state, onClick }) {
  return (
    <ul className="ImageGallery">
      {state.images.map((item) => {
        return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />;
      })}
    </ul>
  );
}

export default ImageGallery;
