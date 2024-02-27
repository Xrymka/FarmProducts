import { styled } from "styled-components"

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const Copyright = styled.small`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`

export const S = {
  Footer,
  Copyright
}