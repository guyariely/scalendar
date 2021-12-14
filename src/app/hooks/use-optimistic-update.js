import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export function useOptimisticUpdate(config) {
  const queryClient = useQueryClient();

  const { key } = typeof config === "function" ? config({}) : config;

  return useMutation(
    mutationArgs => {
      const _mutationArgs =
        typeof config === "function" ? config(mutationArgs) : config;
      _mutationArgs.mutation();
    },
    {
      onMutate: async mutationArgs => {
        await queryClient.cancelQueries(key);
        const previousValue = queryClient.getQueryData(key);

        const _mutationArgs =
          typeof config === "function" ? config(mutationArgs) : config;

        queryClient.setQueryData(key, currentValue =>
          _mutationArgs.optimisticUpdate(currentValue)
        );

        return previousValue;
      },
      onError: (err, _, previousValue) => {
        toast.error(err.message);
        console.error(err);
        queryClient.setQueryData(key, previousValue);
      },
      onSettled: () => {
        queryClient.invalidateQueries(key);
      },
    }
  );
}
