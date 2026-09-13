import { runMapMigration } from '../write-map';
import { AdventureMap as oldAdventureMap } from '../old-data/adventure/adventure-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldAdventureMap, 'adventure');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
