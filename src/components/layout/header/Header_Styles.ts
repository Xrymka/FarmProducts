import { styled } from "styled-components";

const Header = styled.header`
  position: relative;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;


export const S = {
  Header
}