import "./App.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { normalize } from "styled-normalize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const GlabalStyles = createGlobalStyle`
/* ${normalize} */
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
  background: "#E5E1DE",
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
      <ToastContainer />
      {/* <Home /> */}
      {/*  */}

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
