import { useLocation, useParams } from "react-router-dom";
import useCustomQuery from "../../shared/useCustomQuery/useCustomQuery";
import { getItemInfo } from "./api/getItemInfo";
import styles from "./styles/ItemPage.module.css";
import MovieCard from "../../shared/MovieCard/MovieCard";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardInfo from "./components/CardInfo";

function ItemPage() {
  const { movieid } = useParams();

  const location = useLocation();
  const basePath = location.pathname.split("/")[1];

  const locale = useSelector((state) => state.localization.locale);
  const { data, isPending, isFetching, isError, refetch } = useCustomQuery({
    queryFunction: getItemInfo,
    variable: movieid,
    localization: locale,
    basePath: basePath,
  });

  return (
    <div className={styles.main}>
      {isError && (
        <Typography variant="h3">
          {" "}
          {locale === "ru-RU" ? "Ошибка" : "Error"}
        </Typography>
      )}
      {isFetching && (
        <Typography variant="h3" color={"white"}>
          {locale === "ru-RU" ? "Загружаю..." : "Loading..."}
        </Typography>
      )}
      {data && (
        <Grid
          container
          columns={12}
          sx={{
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={7} className={styles.cardWrapper}>
            <CardInfo
              overview={data.overview.toLowerCase()}
              locale={locale}
              runtime={data.runtime}
              genres={data.genres}
            />
          </Grid>
          <Grid item xs={4}>
            <MovieCard item={data} locale={locale} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default ItemPage;
