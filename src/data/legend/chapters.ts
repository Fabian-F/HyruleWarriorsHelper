import type { LegendChapterId } from '../../domain/legend/legend-mission.model';
export const legendChapters: Readonly<Record<LegendChapterId, string>> = {
  prologue: 'Prologue',
  'cia-s-tale': "Cia's Tale",
  'linkle-s-tale': "Linkle's Tale",
  'ocarina-of-time': 'Ocarina of Time',
  'twilight-princess': 'Twilight Princess',
  'skyward-sword': 'Skyward Sword',
  epilogue: 'Epilogue',
  ganondorf: 'Ganondorf',
  'grand-finale': 'Grand Finale',
  'wind-waker': 'Wind Waker',
};
