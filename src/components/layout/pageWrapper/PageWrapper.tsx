import { MainPage } from "../../pages/mainPage/MainPage";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "./PageWrapper_Styles";

export function PageWrapper () {
    return <>
      <Header />
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </>
}