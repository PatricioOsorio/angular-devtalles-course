export const queryKeys = {
  gifs: {
    trendingInfinity: () => ['no-persist', 'gifs', 'trending-infinity'] as const,

    searches: () => ['persist', 'gifs', 'search'] as const,
    search: (query: string) => ['persist', 'gifs', 'search', query] as const,
  },
} as const;
