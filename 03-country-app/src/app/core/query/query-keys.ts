export const queryKeys = {
  country: {
    byCapital: (capital: string) => ['persist', 'country', 'by-capital', capital] as const,
    byName: (name: string) => ['persist', 'country', 'by-name', name] as const,
  },
} as const;
