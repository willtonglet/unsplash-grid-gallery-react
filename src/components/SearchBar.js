import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { SearchBarStyles } from "./styles";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <SearchBarStyles onSubmit={onFormSubmit}>
      <FiSearch size={20} color="#fff" />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for some images"
      />
    </SearchBarStyles>
  );
};

export default SearchBar;
