import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./project1/routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./project1/store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
