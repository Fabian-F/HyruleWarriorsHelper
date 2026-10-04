import { existsSync } from 'node:fs';
import { enemies } from '../../src/data/enemies';
import { materials } from '../../src/data/materials';
import { farmingLocations } from '../../src/data/farming-locations';
import { mapTileIds } from '../../src/data/maps/map-tile-ids';
import type { Material } from '../../src/domain/material.model';
import type { ValidationIssue } from './validation';

interface MaterialsValidationIssue extends ValidationIssue {
  readonly area: 'materials' | 'enemies' | 'farming';
}

export function validateMaterials(): MaterialsValidationIssue[] {
  const issues: MaterialsValidationIssue[] = [];
  const report = (
    area: MaterialsValidationIssue['area'],
    message: string,
    severity: ValidationIssue['severity'] = 'error',
  ) => issues.push({ area, message, severity });
  const materialsById = new Map<string, Material>();
  const enemyIds = new Set<string>();
  const referenced = new Set<string>();
  for (const material of materials) {
    if (materialsById.has(material.id))
      report('materials', `Duplicate material ID: ${material.id}`);
    materialsById.set(material.id, material);
    if (!material.name.trim()) report('materials', `Empty name: ${material.id}`);
    if (!existsSync(`public/materials/${material.id}.png`))
      report('materials', `Missing image: ${material.id}`);
  }
  for (const enemy of enemies) {
    if (enemyIds.has(enemy.id)) report('enemies', `Duplicate enemy ID: ${enemy.id}`);
    enemyIds.add(enemy.id);
    if (!existsSync(`public/enemies/${enemy.id}.png`))
      report('enemies', `Missing image: ${enemy.id}`);
    for (const [tier, id] of Object.entries(enemy.drops)) {
      const material = materialsById.get(id);
      if (!material) report('enemies', `Unknown material for ${enemy.id}: ${id}`);
      else if (material.tier !== tier)
        report('enemies', `Wrong material tier for ${enemy.id}: ${id}`);
      referenced.add(id);
    }
  }
  for (const material of materials) {
    if (!referenced.has(material.id)) report('materials', `Unreferenced material: ${material.id}`);
  }
  const seen = new Set<string>();
  for (const location of farmingLocations) {
    if (!enemyIds.has(location.enemyId)) report('farming', `Unknown enemy: ${location.enemyId}`);
    const key =
      location.type === 'adventure'
        ? `${location.enemyId}/${location.mapId}/${location.tileId}`
        : `${location.enemyId}/${location.type}/${location.title}`;
    if (seen.has(key)) report('farming', `Potential duplicate source location: ${key}`, 'warning');
    seen.add(key);
    if (location.type === 'adventure') {
      const tiles: readonly string[] = mapTileIds[location.mapId];
      if (!tiles.includes(location.tileId)) report('farming', `Missing V2 tile: ${key}`, 'warning');
    }
  }
  return issues;
}
