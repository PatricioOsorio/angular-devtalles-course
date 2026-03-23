export const queryKeys = {
  country: {
    byCapital: (capital: string) => ['persist', 'country', 'by-capital', capital] as const,
  },
} as const;
