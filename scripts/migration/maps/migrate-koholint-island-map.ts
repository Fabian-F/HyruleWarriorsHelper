import { runMapMigration } from '../write-map';
import { KoholintIslandMap as oldMap } from '../old-data/koholint-island/koholint-island-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'koholint-island');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
