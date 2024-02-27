import styled from "styled-components";

type ProductCardProps = {
  isNegative: boolean
}

type OwnerProps = {
  isNegative: boolean
}

const ProductCard = styled.article<ProductCardProps>`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;

const Image = styled.img`
  float: left;
  width: 56px;
  height: 56px;
`;

const Header = styled.header`
  display: flex;
  column-gap: 20px;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

const Owner = styled.span<OwnerProps>`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;

export const Text = styled.p`
  text-align: left;
`;

export const S = {
  ProductCard,
  Image,
  Header,
  Owner,
  Text
}