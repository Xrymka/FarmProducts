import { PageWrapper } from "./components/layout/pageWrapper/PageWrapper";
import { GlobalStyle } from "./styles/Global.styled";

function App() {
  return (
      <div className="App">
        <GlobalStyle />
        <PageWrapper />
      </div>
  );
}

export default App;