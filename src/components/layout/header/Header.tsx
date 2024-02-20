import { Container } from "../../Container";
import { FlexWrapper } from "../../FlexWrapper";
import { Logo } from "../../ui/logo/Logo";
import { Nav } from "../nav/Nav";
import { S } from "./Header_Styles"

export function Header () {
  return (
    <S.Header>
      <Container>
        <FlexWrapper direction="row" justify="space-between" align="center">
          <Logo />
          <Nav />
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}
