type ProductLabelProps = {
  isNegative: boolean;
};

export function ProductLabel({ isNegative }: ProductLabelProps) {
  return <span className={`product-card__label ${isNegative ? "product-card__label--negative" : ""}`}>{isNegative ? "Магазинные продукты" : "Фермерские продукты"}</span>;
}