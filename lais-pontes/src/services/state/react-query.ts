import {
  ONE_DAY_IN_MILLISECONDS,
  ONE_MINUTE_IN_MILLISECONDS,
} from "@/constants/times";
import { QueryClient } from "@tanstack/react-query";

const gcTime = ONE_DAY_IN_MILLISECONDS;
const staleTime = ONE_MINUTE_IN_MILLISECONDS;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime,
      retry: 3,
      staleTime,
      refetchOnWindowFocus: false,
    },
  },
});
