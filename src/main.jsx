import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import {
  InterviewProvider,
} from "./context/InterviewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InterviewProvider>
      <App />
    </InterviewProvider>
  </React.StrictMode>
);