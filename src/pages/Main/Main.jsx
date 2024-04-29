import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SwiperComponent from "../../shared/SwiperComponent/SwiperComponent";
import styles from "./styles/Main.module.css";

function Main() {
  return (
    <Box component="main" className={styles.main}>
      <SwiperComponent />
      <Outlet />
    </Box>
  );
}

export default Main;
