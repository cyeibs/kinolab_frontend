import { Typography } from "@mui/material";
import React from "react";
import styles from "./styles/MovieCard.module.css";
import { parseISO, differenceInDays, getYear } from "date-fns";
import { NavLink } from "react-router-dom";

function getPremiereStatus({ date, locale }) {
  const currentDate = new Date();
  const parsedReleaseDate = parseISO(date);
  const daysDifference = differenceInDays(currentDate, parsedReleaseDate);
  if (daysDifference <= 30) {
    return (
      <Typography variant="t1" className={styles.badge}>
        {locale === "ru-RU" ? "Премьера" : "New"}
      </Typography>
    );
  }

  return null;
}

function extractYearFromDate(dateString) {
  const parsedDate = parseISO(dateString);
  const year = getYear(parsedDate);
  return year.toString(); // convert year number to string if needed
}

const MovieCard = ({ item, locale }) => {
  return (
    <NavLink
      className={`${styles.movieCard} ${styles.poster}`}
      to={`/p/${item.id}`}
    >
      <div className={styles.wrapper}>
        <div className={styles.imageBlock}>
          <div className={styles.badgeWrapper}>
            {item.vote_average !== 0 && (
              <Typography variant="t1" className={styles.rating}>
                {item.vote_average.toFixed(1)}
              </Typography>
            )}
            {getPremiereStatus({
              date: item.release_date || item.first_air_date,
              locale,
            })}
          </div>
          <img
            alt={item.title}
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            className={styles.image}
            sizes="(min-width: 1640px) calc(100vw / 6 - 38px),
         (min-width: 960px) calc(25vw - 31px),
         (min-width: 1280px) calc(20vw - 41.6px),
         (min-width: 650px) calc(100vw / 3 - 16px),
         calc(50vw - 20px)"
            srcSet={`
    https://image.tmdb.org/t/p/w92/${item.poster_path} 92w,
    https://image.tmdb.org/t/p/w154/${item.poster_path} 154w,
    https://image.tmdb.org/t/p/w185/${item.poster_path} 185w,
    https://image.tmdb.org/t/p/w342/${item.poster_path} 342w,
    https://image.tmdb.org/t/p/w500/${item.poster_path} 500w,
    https://image.tmdb.org/t/p/w780/${item.poster_path} 780w,
  `}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>
        <div className={styles.name}>
          <Typography variant="t1" sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
        </div>
        <div className={styles.caption}>
          <Typography variant="t1">
            {extractYearFromDate(item.release_date || item.first_air_date)}
          </Typography>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
