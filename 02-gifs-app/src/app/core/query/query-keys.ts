export const queryKeys = {
  gifs: {
    trending: () => ['trending'] as const,
    search: (query: string) => ['search', query] as const,
  },
} as const;
