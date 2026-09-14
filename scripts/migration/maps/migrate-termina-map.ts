import { runMapMigration } from '../write-map';
import { TerminaMap as oldMap } from '../old-data/termina/termina-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'termina');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
