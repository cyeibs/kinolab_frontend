import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/Fonts/Fonts.jsx";
import { Provider } from "react-redux";
import QueryProvider from "./api/TanStack/Query";
import { RouterProvider } from "react-router-dom";
import { store } from "./api/RTK/store";
import { router } from "./api/Router/BrowserRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
