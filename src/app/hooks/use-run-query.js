import { useQuery } from "react-query";

export function useRunQuery(key, fn, config = {}) {
  const { refetch, ...queryResult } = useQuery(key, fn, {
    enabled: false,
    ...config,
  });

  return { run: refetch, ...queryResult };
}
