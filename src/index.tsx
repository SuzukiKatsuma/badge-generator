import App from "@/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Error: root 要素が見つかりませんでした");
}

onCLS(console.log);
onINP(console.log);
onFCP(console.log);
onLCP(console.log);
onTTFB(console.log);
