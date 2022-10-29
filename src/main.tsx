import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// const Element = React.createElement(
// 'button',
//     {onClick: () => alert('clicou'), children: 'botão'}
// )

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
