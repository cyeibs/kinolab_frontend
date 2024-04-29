import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink, useResolvedPath } from "react-router-dom";
import useCustomQuery from "../useCustomQuery/useCustomQuery";
import { fetchGenres } from "./api/getGenres";
import "./styles/styles.css";

function SwiperComponent() {
  const { pathname } = useResolvedPath(".");

  const locale = useSelector((state) => state.localization.locale);
  const { data, isPending, isFetching, isError, refetch } = useCustomQuery({
    queryFunction: fetchGenres,
    variable: pathname,
    localization: locale,
  });

  return (
    <div className="main">
      {isError && (
        <Typography variant="h3">
          {locale === "ru-RU" ? "Ошибка" : "Error"}
        </Typography>
      )}
      {isFetching && (
        <Typography variant="h3" color={"white"}>
          {locale === "ru-RU" ? "Загружаю..." : "Loading..."}
        </Typography>
      )}
      {data && data.length > 0 && (
        <Swiper
          slidesPerView="auto"
          slidesPerGroup={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper"
        >
          <SwiperSlide key={crypto.randomUUID()}>
            <NavLink
              end
              to={pathname}
              className={({ isActive }) =>
                isActive ? "swiperButtonActive" : "swiperButtonInactive"
              }
            >
              <Typography variant="b1">
                {" "}
                {locale === "ru-RU" ? "все жанры" : "all"}
              </Typography>
            </NavLink>
          </SwiperSlide>
          {data.map(({ id, name }) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                <NavLink
                  to={pathname + "/" + id}
                  className={({ isActive }) =>
                    isActive ? "swiperButtonActive" : "swiperButtonInactive"
                  }
                >
                  <Typography variant="b1">{name.toLowerCase()}</Typography>
                </NavLink>
              </SwiperSlide>
            );
          })}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      )}
    </div>
  );
}

export default SwiperComponent;
