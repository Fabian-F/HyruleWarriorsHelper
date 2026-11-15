import type { BattleAreaId } from './battle-area.model';

/** Stable within a Battle Area; always resolve in that area's context. */
export type KeepId = string;

/** Mission-specific visible names, keyed by the area's stable Keep IDs. */
export type KeepNameOverrides = Readonly<Partial<Record<KeepId, string>>>;

export interface BattleAreaKeep {
  readonly id: KeepId;
  readonly name: string;
  /** Normalized image coordinates: top left origin, each value in 0…1. */
  readonly bounds: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  };
}

export interface BattleAreaMap {
  readonly battleAreaId: BattleAreaId;
  readonly image: string;
  readonly width: number;
  readonly height: number;
  /** Display viewport in original image pixels; does not change normalized locations. */
  readonly viewBox?: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  };
  readonly keeps: readonly BattleAreaKeep[];
}

/** Normalized coordinates in the full original area image, including transparent margins. */
export interface BattleAreaPosition {
  readonly x: number;
  readonly y: number;
}
