import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import { normalize } from "styled-normalize";
import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import Banner from "./components/Banner/Banner";

const GlabalStyles = createGlobalStyle`
${normalize}
*{
  text-decoration:none;
  /* cursor:none;s */
}

html {
  box-sizing:border-box;
  /* -webkit-font-smoothing:ana */
  font-size:16px;
}
body{
  overscroll-behavior:none;
  overflow-x:hidden;
  background-color: ${(props) => props.theme.background}
}
`;

const darkTheme = {
  background: "#c4c4c4",
  color: "#0F1111",
  white: "#ffffff",
  red: "#ea291e",
  card: "#FFFFFF",
  header: "#131921",
  secondary: "#F3A847",
  subHeader: "#232F3E",
  link: "#007185",
};
const lightTheme = {
  background: "#fff",
  color: "#000",
  red: "#ea291e",
  card: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlabalStyles />
      <Header />
      <SubHeader />
      <Banner />
      <div>
        <h1>AShick</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
