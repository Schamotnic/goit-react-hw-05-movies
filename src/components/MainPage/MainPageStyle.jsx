import styled from "styled-components";

export const Contaienr = styled.div`
width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const UlStyles = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto 0 auto;
  padding: 0;
  list-style: none;
`;

export const LiStyles = styled.li`
border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    Transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImgStyles = styled.img`
 width: 100%;
  object-fit: cover;
`;












