import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

export const media = {
  l: (styles) => `
    @media only screen and (max-width:958){
        ${styles}
    }`,

  m: (styles) => `
    @media screen and (max-width: 628px) {
        ${styles}
    }`,
  xm: (styles) => `
    @media screen and (max-width: 467px) {
        ${styles}
    }`,
  s: (styles) => `
    @media screen and (max-width: 416px) {
        ${styles}
    }`,
  xs: (styles) => `
    @media screen and (max-width: 337px) {
        ${styles}
    }`,
    l: (styles, max_size) => `
  @media only screen and (max-width:${size}){
        ${styles}
    }`,
};
