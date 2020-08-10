import React from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import useImages from "./hooks/useImages";

import { MainStyles } from "./components/styles";

const App = () => {
  const [images, search] = useImages("cars");

  return (
    <MainStyles>
      <SearchBar onSubmit={search} />
      <ImageList images={images} />
    </MainStyles>
  );
};

export default App;
