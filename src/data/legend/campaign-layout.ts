import type { LegendMissionId } from '../../domain/legend/legend-mission.model';
import { getCampaignPoint, getCampaignSize } from '../../domain/legend/campaign-layout';

export const campaignGrid = {
  columns: 18,
  rows: 6,
  nodeWidth: 200,
  nodeHeight: 112,
  columnGap: 40,
  rowGap: 36,
  paddingX: 20,
  paddingY: 19,
} as const;

export const campaignSize = getCampaignSize(campaignGrid);

export const campaignNodes: readonly { missionId: LegendMissionId; row: number; column: number }[] =
  [
    { missionId: 'the-armies-of-ruin', row: 3, column: 0 },
    { missionId: 'the-dragon-of-the-caves', row: 4, column: 0 },
    { missionId: 'the-sheikah-tribesman', row: 3, column: 1 },
    { missionId: 'the-invasion-begins', row: 4, column: 1 },
    { missionId: 'the-girl-in-the-green-tunic', row: 2, column: 2 },
    { missionId: 'the-sorceress-of-the-woods', row: 3, column: 2 },
    { missionId: 'the-sorceress-of-the-valley', row: 3, column: 3 },
    { missionId: 'land-of-myth', row: 1, column: 4 },
    { missionId: 'land-of-twilight', row: 3, column: 4 },
    { missionId: 'the-demon-lord-s-plan', row: 4, column: 4 },
    { missionId: 'land-in-the-sky', row: 5, column: 4 },
    { missionId: 'powers-collide', row: 0, column: 5 },
    { missionId: 'the-water-temple', row: 1, column: 5 },
    { missionId: 'the-usurper-king', row: 2, column: 5 },
    { missionId: 'the-shadow-king', row: 3, column: 5 },
    { missionId: 'the-demon-lord', row: 4, column: 5 },
    { missionId: 'sealed-ambition', row: 5, column: 5 },
    { missionId: 'the-sacred-sword', row: 3, column: 6 },
    { missionId: 'her-true-self', row: 2, column: 7 },
    { missionId: 'a-war-of-spirit', row: 3, column: 7 },
    { missionId: 'darkness-falls', row: 4, column: 7 },
    { missionId: 'shining-beacon', row: 3, column: 8 },
    { missionId: 'ganondorf-s-return', row: 3, column: 9 },
    { missionId: 'march-of-the-demon-king', row: 3, column: 10 },
    { missionId: 'battle-of-the-triforce', row: 3, column: 11 },
    { missionId: 'enduring-resolve', row: 3, column: 12 },
    { missionId: 'the-other-hero', row: 2, column: 13 },
    { missionId: 'liberation-of-the-triforce', row: 3, column: 13 },
    { missionId: 'a-new-disturbance', row: 3, column: 14 },
    { missionId: 'the-search-for-cia', row: 3, column: 15 },
    { missionId: 'reclaiming-the-darkness', row: 3, column: 16 },
    { missionId: 'watchers-of-the-triforce', row: 3, column: 17 },
  ];

const campaignLanes: readonly (readonly { row: number; column: number }[])[] = [
  [
    { row: 3, column: 0 },
    { row: 3, column: 17 },
  ],
  [
    { row: 3, column: 0 },
    { row: 4, column: 0 },
    { row: 4, column: 1 },
  ],
  [
    { row: 3, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 3, column: 3.5 },
    { row: 1, column: 3.5 },
    { row: 1, column: 5.5 },
    { row: 5, column: 5.5 },
    { row: 5, column: 3.5 },
    { row: 3, column: 3.5 },
  ],
  [
    { row: 0, column: 5 },
    { row: 2, column: 5 },
  ],
  [
    { row: 4, column: 4 },
    { row: 5, column: 4 },
  ],
  [
    { row: 3, column: 5 },
    { row: 4, column: 5 },
  ],
  [
    { row: 2, column: 7 },
    { row: 4, column: 7 },
  ],
  [
    { row: 2, column: 13 },
    { row: 3, column: 13 },
  ],
];

export const campaignPaths = campaignLanes.map((lane) =>
  lane
    .map((position, index) => {
      const point = getCampaignPoint(position, campaignGrid);
      return `${index === 0 ? 'M' : 'L'}${point.x} ${point.y}`;
    })
    .join(' '),
);
