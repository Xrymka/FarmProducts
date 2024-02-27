import { Container } from "../../Container";
import { FlexWrapper } from "../../FlexWrapper";
import { Logo } from "../../ui/logo/Logo";
import { S } from "./Footer_Styles";

export function Footer () {
  return (
    <S.Footer className="footer">
      <Container>
        <FlexWrapper direction="row" justify="space-between" align="center">
          <Logo />
          <S.Copyright>Создано 2021</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}