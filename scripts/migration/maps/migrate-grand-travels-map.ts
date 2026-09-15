import { runMapMigration } from '../write-map';
import { GrandTravelsMap as oldMap } from '../old-data/grand-travels/grand-travels-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'grand-travels');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
