import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #222;
  }
`;

export const MainStyles = styled.main`
  width: 100vw;
  min-height: 100vh;

  * {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    color: #fff;
  }
`;

export const ImageListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 0;
  padding: 2rem;
  grid-auto-rows: 10px;

  img {
    width: 450px;
    grid-row-end: span 2;
  }
`;

export const SearchBarStyles = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 0;

  input {
    border: 0;
    border-bottom: 3px solid #fff;
    background: transparent;
    font-size: 1.6rem;
    flex: 1;
    margin-left: 1rem;
    height: 4rem;
  }
`;
