import { existsSync } from 'node:fs';
import { legendMissions } from '../../src/data/legend/missions';
import { campaignNodes, campaignGrid, campaignPaths } from '../../src/data/legend/campaign-layout';
import { legacyLegendMissions } from '../../src/data/legend/legacy-missions';
import { characters } from '../../src/data/characters';
import { weapons } from '../../src/data/weapons';
import { farmingLocations } from '../../src/data/farming-locations';
import type { LegendMission } from '../../src/domain/legend/legend-mission.model';
import type { ValidationIssue } from './validation';
export function validateLegend(
  missions: readonly LegendMission[] = legendMissions,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const error = (message: string) =>
    issues.push({ severity: 'error', message: `Legend: ${message}` });
  const ids = new Set(missions.map((m) => m.id));
  const characterIds = new Set<string>(characters.map((c) => c.id));
  const weaponIds = new Set<string>(weapons.map((w) => w.id));
  if (missions.length !== 32 || ids.size !== 32) error('Expected exactly 32 unique missions.');
  const visiting = new Set<string>(),
    visited = new Set<string>();
  const visit = (id: string) => {
    if (visiting.has(id)) {
      error(`Campaign cycle at ${id}`);
      return;
    }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const required of missions.find((m) => m.id === id)?.requires ?? []) visit(required);
    visiting.delete(id);
    visited.add(id);
  };
  for (const m of missions) {
    if (!m.name.trim() || !m.battlefield.trim() || !m.chapterId) error(`Missing metadata: ${m.id}`);
    if (!existsSync(`public/${m.image}`)) error(`Missing asset ${m.image}`);
    for (const id of m.requires) if (!ids.has(id)) error(`Invalid dependency ${id}`);
    for (const id of m.playableCharacters)
      if (!characterIds.has(id)) error(`Invalid character ${id}`);
    for (const r of [...m.clearRewards, ...m.treasures]) {
      if ('characterId' in r && !characterIds.has(r.characterId))
        error(`Invalid reward character in ${m.id}`);
      if (r.type === 'weapon' && !weaponIds.has(r.weaponId)) error(`Invalid weapon in ${m.id}`);
      if ('location' in r && (typeof r.location !== 'string' || !r.location.trim()))
        error(`Missing treasure location in ${m.id}`);
    }
    if (m.skulltulas.length !== 2 || new Set(m.skulltulas.map((s) => s.number)).size !== 2)
      error(`Expected two Skulltulas: ${m.id}`);
    for (const s of m.skulltulas) {
      if (![1, 2].includes(s.number) || !s.task.trim() || !s.location.trim())
        error(`Incomplete Skulltula: ${m.id}`);
      if (s.characterId && !characterIds.has(s.characterId))
        error(`Invalid Skulltula character: ${m.id}`);
      if (s.weaponId && !weaponIds.has(s.weaponId)) error(`Invalid Skulltula weapon: ${m.id}`);
      if (
        s.number === 2 &&
        (!s.characterId || !s.requiresCampaignClear || s.difficulties.join() !== 'hard,hero')
      )
        error(`Invalid second Skulltula requirements: ${m.id}`);
    }
    visit(m.id);
  }
  if (campaignNodes.length !== 32 || new Set(campaignNodes.map((n) => n.missionId)).size !== 32)
    error('Invalid node layout');
  const positions = new Set<string>();
  for (const node of campaignNodes) {
    if (
      !ids.has(node.missionId) ||
      !Number.isInteger(node.row) ||
      !Number.isInteger(node.column) ||
      node.row < 0 ||
      node.column < 0 ||
      node.row >= campaignGrid.rows ||
      node.column >= campaignGrid.columns
    )
      error('Invalid campaign node');
    const position = `${node.row}:${node.column}`;
    if (positions.has(position)) error(`Duplicate campaign position: ${position}`);
    positions.add(position);
  }
  if (!campaignPaths.length || campaignPaths.some((path) => !path.trim()))
    error('Missing campaign lanes');
  if (Object.keys(legacyLegendMissions).length !== 32) error('Expected 32 legacy coordinates');
  for (const id of Object.values(legacyLegendMissions))
    if (!ids.has(id)) error(`Invalid legacy target ${id}`);
  for (const s of farmingLocations)
    if (s.type === 'legend' && !ids.has(s.missionId))
      error(`Invalid farming mission ${s.missionId}`);
  return issues;
}
