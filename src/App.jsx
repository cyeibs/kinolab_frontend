import { Box, CssBaseline, StyledEngineProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setLocale } from "./api/RTK/localizationSlice";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLocale = localStorage.getItem("localization") || "ru-RU";
    localStorage.setItem("localization", savedLocale);
    dispatch(setLocale(savedLocale));
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </Box>
      </StyledEngineProvider>
    </>
  );
}

export default App;
