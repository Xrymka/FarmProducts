import { ProductLabel } from "../productLabel/ProductLabel";
import { Title } from "../title/Title";

type AdvantagePropsType = {
  advantage: {
    id: number
    title: string
    isNegative: boolean
    image: string
    about: string
  }
};

export function ProductCard (props: AdvantagePropsType) {
  return (
    <article className={`product-card ${props.advantage.isNegative ? "product-card--negative" : ""}`}>
      <img
          className="product-card__img"
          width={56}
          height={56}
          src={props.advantage.image}
          alt={props.advantage.title}
      />
      <ProductLabel isNegative={props.advantage.isNegative}/>
      <Title level={1} text={props.advantage.title}/>
      <p className="product-card__text">{props.advantage.about}</p>
    </article>
  )
}