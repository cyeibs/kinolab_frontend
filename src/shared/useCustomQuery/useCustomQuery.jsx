import { useQuery } from "@tanstack/react-query";

function useCustomQuery({ queryFunction, variable, localization }) {
  const { isPending, isFetching, isError, data, refetch } = useQuery({
    queryKey: ["genre", variable, localization],
    queryFn: () => queryFunction({ variable, localization }),
    refetchOnWindowFocus: false,
  });

  return { isPending, isFetching, isError, data, refetch };
}

export default useCustomQuery;
