import { legendMissionIds, type LegendMissionId } from './legend-mission.model';
import { legacyLegendMissions } from '../../data/legend/legacy-missions';
export function isLegendMissionId(id: string): id is LegendMissionId {
  return (legendMissionIds as readonly string[]).includes(id);
}
export function resolveLegacyLegendMission(coordinate: string): LegendMissionId | undefined {
  return legacyLegendMissions[coordinate.toUpperCase()];
}
