import { css, styled } from "styled-components";

type TitleProps = {
  marginBottom?: number,
  titleSize: "extraSmall" |"small" | "medium" | "large"
}

export const Title = styled.h1<TitleProps>`
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-size: ${(props) => props.theme.fontSizeTitle};
  font-weight: 700;

  ${props => props.titleSize === "extraSmall" && css<TitleProps>`
    font-size: 18px;
      line-height: 27px;
  `}

  ${props => props.titleSize === "small" && css<TitleProps>`
      font-size: 24px;
      line-height: 31px;
  `}

  ${props => props.titleSize === "medium" && css<TitleProps>`
      font-size: 36px;
      line-height: 41px;
  `}

  ${props => props.titleSize === "large" && css<TitleProps>`
      font-size: 44px;
      line-height: 50px;
  `}
`