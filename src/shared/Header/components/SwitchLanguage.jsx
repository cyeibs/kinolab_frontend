import { Stack, Switch, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../../../api/RTK/localizationSlice";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function SwitchLanguage() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.localization.locale);
  const [language, setLanguage] = useState(locale === "ru-RU");

  const toggleLanguage = () => {
    const newLocale = language ? "en-US" : "ru-RU";
    setLanguage((prev) => !prev);
    localStorage.setItem("localization", newLocale);
    dispatch(setLocale(newLocale));
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="t3">en</Typography>
      <AntSwitch checked={language} onChange={toggleLanguage} />
      <Typography variant="t3">ру</Typography>
    </Stack>
  );
}

export default SwitchLanguage;
