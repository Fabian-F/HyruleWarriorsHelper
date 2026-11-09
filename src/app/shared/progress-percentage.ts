import type { ProgressCount } from '../../domain/progress/progress-statistics';

export function formatProgressPercentage(count: ProgressCount): string {
  if (!count.total || !count.completed) return '0%';
  if (count.completed === count.total) return '100%';
  if (count.percent < 0.1) return '<0.1%';
  return `${Math.min(99.9, Math.round(count.percent * 10) / 10)}%`;
}
