import { Container } from "../../Container";
import { FlexWrapper } from "../../FlexWrapper";
import { Title } from "../../ui/title/Title.styled";
import { S } from "./About_Styles";

export function About () {
  return (
    <S.About>
      <Container>
        <FlexWrapper direction="column">
          <Title titleSize="large">Магазин фермерских продуктов с&nbsp;доставкой</Title>
          <S.Text>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты максимально свежими.</S.Text>
        </FlexWrapper>
      </Container>
    </S.About>
  )}