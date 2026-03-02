import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* "/*": does not load the component for the whole page or application only the component opens within the other component  */}
        <Route path="/*" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
