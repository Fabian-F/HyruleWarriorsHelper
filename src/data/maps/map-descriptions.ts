import type { MapDescription } from '../../domain/maps/map-description.model';
import { createLookup, lookup } from '../../domain/shared/lookup';
import type { MapId } from '../../domain/maps/map.model';

export const mapDescriptions = [
  {
    id: 'adventure',
    game: 'The Legend of Zelda',
    subtitle: 'Standard',
  },
  {
    id: 'great-sea',
    game: 'The Wind Waker',
    subtitle: 'Sea Chart Rules',
  },
  {
    id: 'master-quest',
    game: 'The Legend of Zelda',
    subtitle: 'Restricted Battles',
  },
  {
    id: 'master-wind-waker',
    game: 'The Wind Waker',
    subtitle: 'Sea Chart Rules',
  },
  {
    id: 'twilight',
    game: 'Twilight Princess',
    subtitle: 'Twilight Realms',
  },
  {
    id: 'termina',
    game: "Majora's Mask",
    subtitle: '72 Hours Counter',
  },
  {
    id: 'koholint-island',
    game: "Link's Awakening",
    subtitle: "Siren's Instruments",
  },
  {
    id: 'grand-travels',
    game: 'Phantom Hourglass & Spirit Tracks',
    subtitle: 'Dual Map',
  },
  {
    id: 'lorule',
    game: 'A Link Between Worlds',
    subtitle: 'Fissure Travel',
  },
  {
    id: 'rewards',
    game: 'Hyrule Warriors',
    subtitle: 'Skulltula Rewards',
  },
] as const satisfies readonly MapDescription[];

const mapDescriptionsById = createLookup(mapDescriptions);

export function getMapDescription(mapId: MapId): MapDescription {
  return lookup(mapId, mapDescriptionsById, 'map-description');
}
