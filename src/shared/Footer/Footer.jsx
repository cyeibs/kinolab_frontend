import { Container } from "@mui/material";
import FooterItem from "./components/FooterItem";
import styles from "./styles/Footer.module.css";

function Footer() {
  const buttons = ["movies", "tv"];

  return (
    <Container fixed component="footer" className={styles.container}>
      {buttons.map((button, index, array) => (
        <FooterItem
          key={index}
          label={button}
          showDivider={index < array.length - 1}
        />
      ))}
    </Container>
  );
}

export default Footer;
