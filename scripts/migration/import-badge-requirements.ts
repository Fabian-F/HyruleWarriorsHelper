import type { MaterialId } from '../../src/domain/material.model';
import { readFileSync, writeFileSync } from 'node:fs';
import { format } from 'prettier';
import { parseCsv } from './character-selection';
import { characters } from '../../src/data/characters';
import { materials } from '../../src/data/materials';
import type { CharacterBadgeRequirements } from '../../src/domain/characters/badge-requirements.model';

async function main(): Promise<void> {
  const sourcePath = 'scripts/migration/sources/character-badge-requirements.csv';
  const outputPath = 'src/data/characters/badge-requirements.ts';
  const rows = parseCsv(readFileSync(sourcePath, 'utf8'));
  const header = rows[0];
  const rupeesColumn = header.indexOf('Rupees');
  if (rupeesColumn < 2) throw new Error('Missing Rupees column');
  const aliases: Readonly<Record<string, string>> = {
    "Zelda's Brooch": 'zeldas-broach',
    "Ganondorf's Gauntlets": 'ganondorfs-gauntlet',
  };
  const materialColumns = header.slice(1, rupeesColumn).map((name) => {
    const material = materials.find(
      (material) => material.name === name || material.id === aliases[name],
    );
    if (!material) throw new Error(`Unknown material column: ${name}`);
    return material.id;
  });
  if (new Set(materialColumns).size !== materialColumns.length)
    throw new Error('Duplicate material columns');
  const parseQuantity = (text: string): number => {
    if (!text) return 0;
    if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(text)) throw new Error(`Invalid quantity: ${text}`);
    const quantity = Number(text.replaceAll(',', ''));
    if (!Number.isSafeInteger(quantity) || quantity < 0)
      throw new Error(`Invalid quantity: ${text}`);
    return quantity;
  };
  const result: CharacterBadgeRequirements[] = [];
  const totals = new Array<number>(rupeesColumn).fill(0);
  let foundTotals = false;
  const totalDiscrepancies: {
    materialId: MaterialId;
    sourceTotal: number;
    characterSum: number;
  }[] = [];
  for (const row of rows.slice(1)) {
    if (row.every((cell) => !cell)) continue;
    if (row.length !== header.length) throw new Error(`Unexpected row width: ${row[0]}`);
    if (row[0] === 'MATERIALS') {
      if (row.slice(1, rupeesColumn + 1).join('|') !== header.slice(1, rupeesColumn + 1).join('|'))
        throw new Error('Repeated header differs');
      continue;
    }
    if (row[0] === 'TOTAL') {
      if (foundTotals) throw new Error('Duplicate TOTAL row');
      foundTotals = true;
      for (let i = 1; i <= rupeesColumn; i++) {
        const sourceTotal = parseQuantity(row[i]);
        if (sourceTotal !== totals[i - 1]) {
          if (i === rupeesColumn) throw new Error('Source rupee total mismatch');
          totalDiscrepancies.push({
            materialId: materialColumns[i - 1],
            sourceTotal,
            characterSum: totals[i - 1],
          });
        }
      }
      continue;
    }
    if (foundTotals) throw new Error('Character after TOTAL row');
    const character = characters.find((character) => character.name === row[0]);
    if (!character || result.some((entry) => entry.characterId === character.id))
      throw new Error(`Unknown or duplicate character: ${row[0]}`);
    const quantities = row.slice(1, rupeesColumn + 1).map(parseQuantity);
    quantities.forEach((quantity, i) => {
      totals[i] += quantity;
    });
    result.push({
      characterId: character.id,
      materials: materialColumns.flatMap((materialId, i) =>
        quantities[i] ? [{ materialId, quantity: quantities[i] }] : [],
      ),
      rupees: quantities[quantities.length - 1],
    });
  }
  if (!foundTotals || result.length !== characters.length)
    throw new Error('Incomplete badge requirements sheet');
  const source = {
    url: 'https://docs.google.com/spreadsheets/d/1d6Spep2Qryhi1Om_lY_iLV21DsB-fTsu_0ZNtLIKCyk/edit?gid=299625837#gid=299625837',
    sheet: 'Badge Requirements',
    importedOn: '2026-10-16',
    totalDiscrepancies,
    scope: 'Total badge requirements per character; individual badge recipes are not provided.',
  };
  const output = await format(
    `import type { CharacterBadgeRequirements } from '../../domain/characters/badge-requirements.model';
export const badgeRequirementsSource = ${JSON.stringify(source)} as const;
export const characterBadgeRequirements = ${JSON.stringify(result)} as const satisfies readonly CharacterBadgeRequirements[];
`,
    { filepath: outputPath, singleQuote: true, printWidth: 96 },
  );
  if (process.argv.includes('--check')) {
    if (readFileSync(outputPath, 'utf8') !== output)
      throw new Error('Badge requirements differ from source snapshot');
  } else writeFileSync(outputPath, output);
  for (const issue of totalDiscrepancies)
    console.warn(
      `Source TOTAL differs for ${issue.materialId}: ${issue.sourceTotal}; character sum: ${issue.characterSum}. Character rows preserved unchanged.`,
    );
  console.log(
    `Verified ${result.length} characters, ${materialColumns.length} materials and ${totals[totals.length - 1]} rupees; compared every material column with source totals.`,
  );
}
main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
