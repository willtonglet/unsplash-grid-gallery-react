import React, { useState, useRef, useEffect } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.addEventListener("load", handleSpans);
  }, []);

  const handleSpans = () => {
    const height = imageRef.current.clientHeight;

    const thisSpans = Math.ceil(height / 10);

    setSpans(thisSpans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </div>
  );
};

export default ImageCard;
