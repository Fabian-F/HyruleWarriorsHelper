import { validateMaps } from './validate-maps';
import type { MapValidationIssue } from './validate-map';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  gray: '\x1b[90m',
} as const;

async function main(): Promise<void> {
  const showWarnings = process.argv.includes('--warnings') || process.argv.includes('--verbose');

  console.log('Validating game data...\n');

  const issues = await validateMaps();

  const errors = issues.filter((issue) => issue.severity === 'error');
  const warnings = issues.filter((issue) => issue.severity === 'warning');

  printIssues(errors);

  if (showWarnings) {
    printIssues(warnings);
  }

  printSummary(errors.length, warnings.length, showWarnings);

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}

function printIssues(issues: readonly MapValidationIssue[]): void {
  for (const issue of issues) {
    const isError = issue.severity === 'error';

    const icon = isError ? '✖' : '⚠';
    const color = isError ? colors.red : colors.yellow;

    const location = issue.tileId ? `${issue.mapId}/${issue.tileId}` : issue.mapId;

    console.log(`${color}${icon} ${location}${colors.reset} ${issue.message}`);
  }
}

function printSummary(errorCount: number, warningCount: number, showWarnings: boolean): void {
  console.log();

  if (errorCount === 0) {
    console.log(`${colors.green}✔ Data validation successful${colors.reset}`);
  } else {
    console.log(`${colors.red}✖ Data validation failed${colors.reset}`);
  }

  console.log(
    `${errorCount} error${errorCount === 1 ? '' : 's'}, ` +
      `${warningCount} warning${warningCount === 1 ? '' : 's'}`,
  );

  if (warningCount > 0 && !showWarnings) {
    console.log(`${colors.gray}Run with --warnings to show warnings.${colors.reset}`);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
