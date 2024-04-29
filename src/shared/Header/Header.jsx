import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LogoComponent from "./components/LogoComponent";
import NavigationComponent from "./components/NavigationComponent";
import SwitchLanguage from "./components/SwitchLanguage";
import styles from "./styles/Header.module.css";

function Header() {
  return (
    <AppBar component="header" elevation={0} className={styles.appBar}>
      <Toolbar disableGutters>
        <Box className={styles.logoContainer}>
          <LogoComponent />
        </Box>
        <NavigationComponent />
        <SwitchLanguage />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
