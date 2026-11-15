export type BattleAreaId =
  | 'death-mountain'
  | 'eldin-caves'
  | 'faron-woods'
  | 'forsaken-fortress'
  | 'ganons-tower'
  | 'gerudo-desert'
  | 'hyrule-field'
  | 'lake-hylia'
  | 'palace-of-twilight'
  | 'sealed-grounds'
  | 'skyloft'
  | 'temple-of-souls'
  | 'temple-of-the-sacred-sword'
  | 'twilight-field'
  | 'valley-of-seers'
  | 'wind-and-earth-temples';

export interface BattleArea {
  readonly id: BattleAreaId;
  readonly name: string;
}
