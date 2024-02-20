import logo from "../../../assets/images/logo.svg";
import { StyledLogo, Text } from "./Logo_Styles";

export function Logo () {
  return (
    <StyledLogo href="/" className="logo">
      <img src={logo} className="logo__image" alt="Логотип." />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  )
}