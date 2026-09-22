import type { MapMetadata } from '../../../domain/maps/map.model';

export const koholintIslandMapMetadata = {
  id: 'koholint-island',
  name: 'Koholint Island Map',
  extras: 'Extra drops based on active Siren power',
  difficulty: 'hero',
  tileCount: 84,
} satisfies MapMetadata;
