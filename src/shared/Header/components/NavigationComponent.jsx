import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

const menuItems = {
  "ru-RU": [
    { url: "/movie", name: "кино" },
    { url: "/tv", name: "сериалы" },
  ],
  "en-US": [
    { url: "/movie", name: "movies" },
    { url: "/tv", name: "tv" },
  ],
};
function NavigationComponent() {
  const locale = useSelector((state) => state.localization.locale);
  return (
    <div className={styles.header}>
      {menuItems[locale].map((el, index) => (
        <NavLink
          key={index}
          to={el.url}
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
        >
          <Typography variant="b1">{el.name}</Typography>
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationComponent;
