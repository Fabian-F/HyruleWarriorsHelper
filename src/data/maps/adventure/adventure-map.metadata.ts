import type { MapMetadata } from '../../../domain/maps/map.model';

export const adventureMapMetadata = {
  id: 'adventure',
  name: 'Adventure Map',
  difficulty: 'easy',
  tileCount: 128,
} satisfies MapMetadata;
