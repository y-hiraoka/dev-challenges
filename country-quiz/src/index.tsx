import React from "react";
import ReactDOM from "react-dom";
import Recoil from "recoil";
import { DefaultTheme, ThemeProvider } from "@material-ui/styles";
import "./ress.css";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const initialTheme: DefaultTheme = {
  colors: {
    background: "#ffffff",
    primary: "#5357a4",
    secondary: "#edab47",
    text: "#375278",
    success: "#78bc8c",
    error: "#dc8785",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Recoil.RecoilRoot>
      <ThemeProvider theme={initialTheme}>
        <App />
      </ThemeProvider>
    </Recoil.RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
