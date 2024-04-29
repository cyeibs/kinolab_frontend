import { useQuery } from "@tanstack/react-query";

function useCustomQuery({ queryFunction, variable, localization, basePath }) {
  const { isPending, isFetching, isError, data, refetch } = useQuery({
    queryKey: ["genre", variable, localization],
    queryFn: () => queryFunction({ variable, localization, basePath }),
    refetchOnWindowFocus: false,
  });

  return { isPending, isFetching, isError, data, refetch };
}

export default useCustomQuery;
