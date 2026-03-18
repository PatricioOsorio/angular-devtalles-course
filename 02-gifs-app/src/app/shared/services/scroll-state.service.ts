import { Injectable, signal } from '@angular/core';

export interface IScrollEntry {
  top: number;
  updatedAt: number;
}

export type IPosition = Record<string, IScrollEntry>;

@Injectable({
  providedIn: 'root',
})
export class ScrollStateService {
  private readonly positions = signal<IPosition>({});

  getTop(key: string): number {
    return this.positions()[key]?.top ?? 0;
  }

  setTop(key: string, top: number) {
    this.positions.update((positions) => ({
      ...positions,
      [key]: { top, updatedAt: Date.now() },
    }));
  }

  clear(key: string) {
    this.positions.update((positions) => {
      const { [key]: _, ...rest } = positions;
      return rest;
    });
  }
}
