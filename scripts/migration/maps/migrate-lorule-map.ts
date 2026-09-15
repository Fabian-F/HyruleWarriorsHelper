import { runMapMigration } from '../write-map';
import { LoruleMap as oldMap } from '../old-data/lorule/lorule-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'lorule');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
