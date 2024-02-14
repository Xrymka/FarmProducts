import { MainPage } from "../../pages/mainPage/MainPage";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function PageWrapper () {
    return <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
      </main>
      <Footer />
    </>
}