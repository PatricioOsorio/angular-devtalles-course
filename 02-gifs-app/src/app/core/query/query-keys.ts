export const queryKeys = {
  gifs: {
    trending: () => ['no-persist', 'gifs', 'trending'] as const,

    searches: () => ['persist', 'gifs', 'search'] as const,
    search: (query: string) => ['persist', 'gifs', 'search', query] as const,
  },
} as const;
