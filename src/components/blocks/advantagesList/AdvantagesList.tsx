import { advantagesList } from "../../../mocks/advantagesList";
import { ProductCard } from "../../ui/productCard/ProductCard";
import { Title } from "../../ui/title/Title";

export function AdvantagesList () {
  return (
    <section className="advantages">
      <Title level={2} text="Почему фермерские продукты лучше?"/>
      <ul className="advantages__list">
        {advantagesList.map((advantage) => (
          <li className="features__item" key={advantage.id}>
            <ProductCard advantage={advantage} />
          </li>
        ))}
      </ul>
    </section>
  )}