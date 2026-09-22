// scripts/migration/migrate-all.ts

import { spawnSync } from 'node:child_process';

const migrations = [
  'migrate:adventure',
  'migrate:great-sea',
  'migrate:master-quest',
  'migrate:master-wind-waker',
  'migrate:twilight',
  'migrate:termina',
  'migrate:koholint-island',
  'migrate:grand-travels',
  'migrate:lorule',
  'migrate:rewards',
];

const args = process.argv.slice(2);

for (const migration of migrations) {
  const result = spawnSync('npm', ['run', migration, '--', ...args], {
    stdio: 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
