import { runMapMigration } from '../write-map';
import { MasterWindWakerMap as oldMasterWindWakerMap } from '../old-data/master-wind-waker/master-wind-waker-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMasterWindWakerMap, 'master-wind-waker');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
