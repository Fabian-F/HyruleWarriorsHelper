export interface CampaignGrid {
  readonly columns: number;
  readonly rows: number;
  readonly nodeWidth: number;
  readonly nodeHeight: number;
  readonly columnGap: number;
  readonly rowGap: number;
  readonly paddingX: number;
  readonly paddingY: number;
}

export function getCampaignSize(grid: CampaignGrid) {
  return {
    width: grid.columns * grid.nodeWidth + (grid.columns - 1) * grid.columnGap + 2 * grid.paddingX,
    height: grid.rows * grid.nodeHeight + (grid.rows - 1) * grid.rowGap + 2 * grid.paddingY,
  };
}

export function getCampaignPoint(
  position: { readonly row: number; readonly column: number },
  grid: CampaignGrid,
) {
  return {
    x: grid.paddingX + position.column * (grid.nodeWidth + grid.columnGap) + grid.nodeWidth / 2,
    y: grid.paddingY + position.row * (grid.nodeHeight + grid.rowGap) + grid.nodeHeight / 2,
  };
}
