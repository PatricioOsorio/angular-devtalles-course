import { QueryClient } from '@tanstack/angular-query-experimental';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { persistQueryClient } from '@tanstack/query-persist-client-core';

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

const persister = createAsyncStoragePersister({
  storage: {
    getItem: async (key) => localStorage.getItem(key),
    setItem: async (key, value) => localStorage.setItem(key, value),
    removeItem: async (key) => localStorage.removeItem(key),
  },
});

persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60, // 1h
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      return query.queryKey[0] !== 'no-persist';
    },
  },
});
