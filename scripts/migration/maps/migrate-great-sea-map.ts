import { runMapMigration } from '../write-map';
import { GreatSeaMap as oldGreatSeaMap } from '../old-data/great-sea/great-sea-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldGreatSeaMap, 'great-sea');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
