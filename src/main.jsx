
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './App.css';
// import App from './App.jsx';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement); // Create root using React 18

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);