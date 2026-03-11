import { QueryClient } from "@tanstack/angular-query-experimental";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15, // 15 min
      gcTime: 1000 * 60 * 30, // 30 min
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});
