export const queryKeys = {
  country: {
    byCapital: (capital: string) => ['persist', 'country', 'by-capital', capital] as const,
    byName: (name: string) => ['persist', 'country', 'by-name', name] as const,
    byAlphaCode: (code: string) => ['persist', 'country', 'by-alpha-code', code] as const,
    byRegion: (region: string) => ['persist', 'country', 'by-region', region] as const,
  },
} as const;
