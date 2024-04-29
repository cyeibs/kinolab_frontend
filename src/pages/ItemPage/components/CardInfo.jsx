import { Grid, Typography } from "@mui/material";
import styles from "../styles/ItemPage.module.css";

function CardInfo({ overview, locale, runtime, genres }) {
  return (
    <Grid className={styles.cardInfo} gap={2}>
      <Grid sx={{ display: "flex" }}>
        <Typography variant="t1" sx={{ fontWeight: 600 }}>
          {locale === "ru-RU" ? "описание:" : "about:"}
        </Typography>
        &nbsp;
        <Typography variant="t1">{overview}</Typography>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Typography variant="t1" sx={{ fontWeight: 600 }}>
          {locale === "ru-RU" ? "продолжительность:" : "duration:"}
        </Typography>
        &nbsp;
        <Typography variant="t1">
          {runtime} {locale === "ru-RU" ? "мин." : "min."}
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Typography variant="t1" sx={{ fontWeight: 600 }}>
          {locale === "ru-RU" ? "жанр:" : "genre:"}
        </Typography>
        &nbsp;
        {genres.map((el, index, array) => (
          <Typography key={el.id} variant="t1" color="white">
            {el.name}
            {index < array.length - 1 && ","} &nbsp;
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default CardInfo;
