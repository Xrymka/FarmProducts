import { FlexWrapper } from "../../FlexWrapper";
import { Title } from "../../ui/title/Title";
import { StyledAbout, Text } from "./About_Styles";

export function About () {
  return (
    <StyledAbout>
      <FlexWrapper direction="column">
        <Title level={1} text="Магазин фермерских продуктов с&nbsp;доставкой"/>
        <Text>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты максимально свежими.</Text>
      </FlexWrapper>
    </StyledAbout>
  )}