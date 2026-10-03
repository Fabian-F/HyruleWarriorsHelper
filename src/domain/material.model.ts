export const MATERIAL_TIERS = ['bronze', 'silver', 'gold'] as const;
export type MaterialTier = (typeof MATERIAL_TIERS)[number];

// Stable material identities; display names may change independently.
export type BronzeMaterialId =
  | 'aeralfos-leather'
  | 'fiery-aeralfos-leather'
  | 'gibdo-bandage'
  | 'redead-bandage'
  | 'lizalfos-scale'
  | 'dinolfos-fang'
  | 'moblin-flank'
  | 'shield-moblin-helmet'
  | 'piece-of-darknut-armor'
  | 'stalmaster-wrist-bone'
  | 'big-poe-necklace'
  | 'essence-of-icy-big-poe'
  | 'hylian-captain-gauntlet'
  | 'goron-armor-breastplate'
  | 'big-blin-hide'
  | 'stone-blin-buckler';

export type SilverMaterialId =
  | 'round-aeralfos-shield'
  | 'fiery-aeralfos-wing'
  | 'heavy-gibdo-sword'
  | 'redead-knight-ashes'
  | 'lizalfos-gauntlet'
  | 'dinolfos-arm-guard'
  | 'moblin-spear'
  | 'metal-moblin-shield'
  | 'large-darknut-sword'
  | 'stalmasters-skull'
  | 'big-poes-lantern'
  | 'icy-big-poes-talisman'
  | 'holy-hylian-shield'
  | 'thick-goron-helmet'
  | 'big-blin-club'
  | 'stone-blin-helmet'
  | 'ganons-mane'
  | 'king-dodongos-claws'
  | 'gohmas-acid'
  | 'manhandlas-toxic-dust'
  | 'argoroks-embers'
  | 'the-imprisoneds-scales'
  | 'helmaroc-plume'
  | 'phantom-ganons-cape'
  | 'cias-bracelet'
  | 'volgas-helmet'
  | 'wizzros-robe'
  | 'links-boots'
  | 'lanas-hair-clip'
  | 'zeldas-broach'
  | 'impas-hair-band'
  | 'ganondorfs-gauntlet'
  | 'sheiks-kunai'
  | 'darunias-spikes'
  | 'rutos-earrings'
  | 'agithas-basket'
  | 'midnas-hair'
  | 'fis-heels'
  | 'ghirahims-sash'
  | 'zants-magic-gem'
  | 'twili-midnas-hairpin'
  | 'young-links-belt'
  | 'tingles-map'
  | 'linkles-boots'
  | 'skull-kids-hat'
  | 'pirates-charm'
  | 'tetras-sandals'
  | 'king-daphness-robe';

export type GoldMaterialId =
  | 'ganons-fang'
  | 'king-dodongos-crystal'
  | 'gohmas-lens'
  | 'manhandlas-sapling'
  | 'argoroks-stone'
  | 'the-imprisoneds-pillar'
  | 'helmaroc-kings-mask'
  | 'phantom-ganons-sword'
  | 'cias-staff'
  | 'volgas-dragon-spear'
  | 'wizzros-ring'
  | 'links-scarf'
  | 'lanas-cloak'
  | 'zeldas-tiara'
  | 'impas-breastplate'
  | 'ganondorfs-jewel'
  | 'sheiks-turban'
  | 'darunias-bracelet'
  | 'rutos-scale'
  | 'agithas-pendant'
  | 'midnas-fused-shadow'
  | 'fis-crystal'
  | 'ghirahims-cape'
  | 'zants-helmet'
  | 'twili-midnas-robe'
  | 'keaton-mask'
  | 'tingles-watch'
  | 'linkles-compass'
  | 'majoras-mask'
  | 'island-outfit'
  | 'tetras-bandana'
  | 'king-daphness-crown';

type MaterialIdsByTier = {
  readonly bronze: BronzeMaterialId;
  readonly silver: SilverMaterialId;
  readonly gold: GoldMaterialId;
};

export type MaterialId<Tier extends MaterialTier = MaterialTier> = MaterialIdsByTier[Tier];

// Multiple enemies may reference the same material; each tier has at most one drop.
export type EnemyDrops = {
  readonly [Tier in MaterialTier]?: MaterialId<Tier>;
};

export interface Material {
  readonly id: MaterialId;
  readonly tier: MaterialTier;
  readonly name: string;
}

// Validate that each drop reference exists and agrees with its material tier.
