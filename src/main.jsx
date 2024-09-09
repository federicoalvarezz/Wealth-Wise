import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Prueba from "./components/example.jsx";
// import BtnUp from "./components/btnUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Prueba />
    {/* <BtnUp /> */}
  </StrictMode>
);
