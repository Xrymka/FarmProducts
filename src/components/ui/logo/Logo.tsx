import logo from "../../../assets/images/logo.svg";

export function Logo () {
  return (
    <a href="/" className="logo">
      <img src={logo} className="logo__image" alt="Логотип." />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  )
}