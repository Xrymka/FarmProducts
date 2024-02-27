import { Title } from "../title/Title.styled";
import { S } from "./ProductCard_Styles";

export type AdvantagePropsType = {
  advantage: {
    id: number
    title: string
    owner: string
    isNegative: boolean
    image: string
    about: string
  }
};

export function ProductCard (props: AdvantagePropsType) {
  return (
    <S.ProductCard isNegative={props.advantage.isNegative}>
      <S.Header>
        <S.Image
          width={56}
          height={56}
          src={props.advantage.image}
          alt={props.advantage.title}
        />
        <div>
          <S.Owner isNegative={props.advantage.isNegative}>{props.advantage.owner}</S.Owner>
          <Title as={"h3"} titleSize="extraSmall">{props.advantage.title}</Title>
        </div>
      </S.Header>
      <S.Text>{props.advantage.about}</S.Text>
    </S.ProductCard>
  )
}