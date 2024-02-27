import styled from "styled-components";
import aboutImage from "../../../assets/images/about.svg";

const About = styled.section`
  position: relative;
  margin-bottom: 100px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  z-index: 1;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

const Text = styled.p`
  max-width: 650px;
  margin-top: 24px;
  padding-right: 30px;
  margin-bottom: 40px;
`;

export const S = {
  About,
  Text
}