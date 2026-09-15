import { runMapMigration } from '../write-map';
import { RewardsMap as oldMap } from '../old-data/rewards/rewards-map.data';

async function main(): Promise<void> {
  await runMapMigration(oldMap, 'rewards');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
