import React from "react";
import ImageCard from "./ImageCard";

import { ImageListStyles } from "./styles";

const ImageList = ({ images }) => {
  const renderImages = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <ImageListStyles>{renderImages}</ImageListStyles>;
};

export default ImageList;
