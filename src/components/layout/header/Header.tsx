import { Logo } from "../../ui/logo/Logo";
import { Nav } from "../nav/Nav";

export function Header () {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  )
}