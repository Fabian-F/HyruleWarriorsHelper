import { runMapMigration } from '../write-map';
import { TwilightMap as oldMap } from '../old-data/twilight/twilight-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'twilight');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
