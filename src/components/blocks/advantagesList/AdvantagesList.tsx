import { advantagesList } from "../../../mocks/advantagesList";
import { ProductCard } from "../../ui/productCard/ProductCard";
import { Button } from "../../ui/button/Button.styled";
import { S } from "./AdvantagesList_Styles";
import { Container } from "../../Container";
import { FlexWrapper } from "../../FlexWrapper";

export function AdvantagesList () {
  return (
    <S.AdvantagesList>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <S.StyledTitle as={"h2"} titleSize="medium">Почему фермерские продукты лучше?</S.StyledTitle>
          <S.List>
            {advantagesList.map((advantage) => (
              <li key={advantage.id}>
                <ProductCard advantage={advantage} />
              </li>
            ))}
          </S.List>
          <Button link="/buy">Купить</Button>
        </FlexWrapper>
      </Container>
    </S.AdvantagesList>
  )}