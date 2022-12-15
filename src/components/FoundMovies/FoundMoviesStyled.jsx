import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivStyled = styled.div`
width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

export const Ulstyled = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin:0  auto 0 auto;
  padding: 0;
  list-style: none;
`

export const LiStyled  = styled.li`
border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);


  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover{
    Transform: scale(1.03);
    cursor: zoom-in;
  }
`
export const StyledLink = styled(Link)`
text-decoration: none;
`
export const ImgStyled  = styled.img`
 width: 100%;
  object-fit: cover;
`