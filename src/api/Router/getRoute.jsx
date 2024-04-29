import { useResolvedPath } from "react-router-dom";

export function GetRoute() {
  const { pathname } = useResolvedPath(".");

  return pathname;
}
