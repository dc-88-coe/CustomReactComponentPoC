import React from "react"
import ReactDOM from "react-dom"
import MyComponent from "./MyComponent"
import RatingStar from "./RatingStar";
import PrimeReactComponent from "./PrimeReactComponent";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import './AppCss.css'


ReactDOM.render(
  <React.StrictMode>
      <PrimeReactComponent/>
  </React.StrictMode>,
  document.getElementById("root")
)
