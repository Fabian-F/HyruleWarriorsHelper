import { runMapMigration } from '../write-map';
import { MasterQuestMap as oldMasterQuestMap } from '../old-data/master-quest/master-quest-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMasterQuestMap, 'master-quest');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
