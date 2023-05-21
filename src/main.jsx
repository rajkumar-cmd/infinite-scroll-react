import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvided from "./Context/AuthContextProvided.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthContextProvided>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvided>
  </ChakraProvider>
);
