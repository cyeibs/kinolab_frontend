import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "../../../../shared/MovieCard/MovieCard";
import useInfiniteScroll from "../../../../shared/useInfiniteScroll/useInfiniteScroll";
import { getItemList } from "./api/getItemList";
import styles from "./styles/MovieCardGrid.module.css";

function MovieCardGrid() {
  const { genre } = useParams();
  const location = useLocation();
  const basePath = location.pathname.split("/")[1];
  const locale = useSelector((state) => state.localization.locale);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["gridList", genre, basePath, locale],
    queryFn: ({ pageParam = 1 }) =>
      getItemList({
        id: genre,
        pageParam: pageParam,
        pathname: basePath,
        localization: locale,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const prevPage = firstPage.page - 1;
      return prevPage >= 1 ? prevPage : undefined;
    },
    refetchInterval: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const gridList = useMemo(
    () => data?.pages.reduce((acc, page) => [...acc, ...page.results], []),
    [data]
  );

  const lastElementRef = useInfiniteScroll({
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
  });

  return (
    <Box component="section" className={styles.main}>
      {isFetching && (
        <Typography variant="h3" color={"white"}>
          {locale === "ru-RU" ? "Загружаю..." : "Loading..."}
        </Typography>
      )}
      {error && (
        <Typography variant="h3">
          {locale === "ru-RU" ? "Ошибка" : "Error"}
        </Typography>
      )}

      {gridList && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ justifyContent: "space-between" }}
          columns={{ xs: 12, lg: 10 }}
        >
          {gridList.map((item) => (
            <Grid
              ref={lastElementRef}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={crypto.randomUUID()}
            >
              <MovieCard basePath={basePath} item={item} locale={locale} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default MovieCardGrid;
