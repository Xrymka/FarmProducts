import { Title } from "../../ui/title/Title";

export function About () {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title level={1} text="Магазин фермерских продуктов с&nbsp;доставкой"/>
        <p className="about__text">Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты максимально свежими.</p>
      </div>
    </section>
  )}