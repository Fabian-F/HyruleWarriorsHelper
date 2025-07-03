import { FairyTraits, FairySkill, Fairy } from "src/app/models";
import * as FairySkills from "src/assets/data/my-fairy/fairy-skills.data";

export type FairyTrait = keyof FairyTraits;

export interface CyclePlan {
  targetTraits: FairyTrait[];
  skillGoals: FairySkill[];
  requiredValues: Partial<Record<FairyTrait, number>>;
}

export class MyFairyGenerator {
  static perfectSkills: FairySkill[] = [
    FairySkills.Extreme_Crush_Plus,
    FairySkills.Glass_Cannon,
    FairySkills.XP_Master_Plus,
    FairySkills.Total_Focus,
    FairySkills.Weapon_Master_Plus,
    FairySkills.Magic_Fountain_Plus,
    FairySkills.Food_Master_Plus,
    FairySkills.Special_Fountain_Plus,
    FairySkills.Wall_of_Water_Plus,
    FairySkills.Material_Master_Plus,
  ];

  private static traitCycles: FairyTrait[][] = [
  ['friendly', 'eager', 'fleet_shrewd', 'soft_relaxed', 'dizzy'],       // Weapon Master+ & Rupee Master+
  ['dizzy', 'resolute', 'eager', 'sparkly', 'friendly'],              // Glass Cannon & XP Master+
  ['fleet_shrewd', 'eager', 'flashy_valiant', 'soft_relaxed', 'dreamy_aspiring'],  // Magic Fountain+
  ['sparkly', 'eager', 'flashy_valiant', 'resolute', 'dreamy_aspiring'],          // Special Fountain+
  ['smiley', 'flashy_valiant', 'friendly', 'sparkly', 'resolute'],                  // Extreme Crush+
  ['smiley', 'sparkly', 'dreamy_aspiring', 'flashy_valiant', 'resolute'],            // Wall of Water+
  ['resolute', 'eager', 'flashy_valiant', 'dreamy_aspiring', 'soft_relaxed'],       // Food Master+
  ['resolute', 'smiley', 'flashy_valiant', 'dreamy_aspiring', 'soft_relaxed'],       // Material Master+
];

  static get allTraits(): FairyTrait[] {
    return [
      'dizzy',
      'eager',
      'friendly',
      'resolute',
      'smiley',
      'sparkly',
      'dreamy_aspiring',
      'fleet_shrewd',
      'flashy_valiant',
      'soft_relaxed'
    ];
  }

  static generatePlan(fairy: Fairy): CyclePlan[] {
    const knownSkills = new Set(fairy.skills.map(s => s.name));
    let remainingSkills = this.perfectSkills.filter(s => !knownSkills.has(s.name));
    let currentTraits = fairy.activeTraits?.slice() ?? this.getTopFiveTraits(fairy.allTraits);
    const plan: CyclePlan[] = [];

    let traitCyclesLeft = [...this.traitCycles];

    const firstSkills = remainingSkills.filter(skill =>
      Object.keys(skill.stats).every(t => currentTraits.includes(t as FairyTrait))
    );
    plan.push({
      targetTraits: [...currentTraits],
      skillGoals: firstSkills,
      requiredValues: this.calculateRequiredValues(currentTraits, firstSkills)
    });
    firstSkills.forEach(s => knownSkills.add(s.name));
    remainingSkills = this.perfectSkills.filter(s => !knownSkills.has(s.name));

    while (remainingSkills.length > 0 && traitCyclesLeft.length > 0) {
      const scoredCycles = traitCyclesLeft.map(cycle => {
        const traitDiff = this.countTraitDifferences(currentTraits, cycle);
        const skillsInCycle = remainingSkills.filter(skill =>
          Object.keys(skill.stats).every(t => cycle.includes(t as FairyTrait))
        );
        return { cycle, traitDiff, skillsInCycle };
      });

      const cyclesWithSkills = scoredCycles.filter(c => c.skillsInCycle.length > 0);

      let chosen: any;
      if (cyclesWithSkills.length > 0) {
        cyclesWithSkills.sort((a, b) => {
          if (a.traitDiff !== b.traitDiff) return a.traitDiff - b.traitDiff;
          return b.skillsInCycle.length - a.skillsInCycle.length;
        });
        chosen = cyclesWithSkills[0];
      } else {
        scoredCycles.sort((a, b) => a.traitDiff - b.traitDiff);
        chosen = scoredCycles[0];
      }

      const intermediateSteps = this.generateIntermediateCycles(currentTraits, chosen.cycle);
      for (const stepTraits of intermediateSteps) {
        const isLast = this.arraysEqual(stepTraits, chosen.cycle);
        plan.push({
          targetTraits: stepTraits,
          skillGoals: isLast ? chosen.skillsInCycle : [],
          requiredValues: isLast ? this.calculateRequiredValues(stepTraits, chosen.skillsInCycle) : {}
        });
        currentTraits = stepTraits;
      }

      chosen.skillsInCycle.forEach((s: any) => knownSkills.add(s.name));
      remainingSkills = this.perfectSkills.filter(s => !knownSkills.has(s.name));

      traitCyclesLeft = traitCyclesLeft.filter(c => c !== chosen.cycle);
    }

    return plan;
  }

  private static calculateRequiredValues(traits: FairyTrait[], skills: FairySkill[]): Partial<Record<FairyTrait, number>> {
    const required: Partial<Record<FairyTrait, number>> = {};
    for (const trait of traits) {
      required[trait] = Math.max(...skills.map(s => s.stats[trait] ?? 0), 0);
    }
    return required;
  }

  private static countTraitDifferences(a: FairyTrait[], b: FairyTrait[]): number {
    const setB = new Set(b);
    return a.filter(t => !setB.has(t)).length;
  }

  private static generateIntermediateCycles(current: FairyTrait[], target: FairyTrait[]): FairyTrait[][] {
    const steps: FairyTrait[][] = [];
    let intermediate = [...current];

    while (this.countTraitDifferences(intermediate, target) > 1) {
      const toRemove = intermediate.find(t => !target.includes(t));
      const toAdd = target.find(t => !intermediate.includes(t));
      if (!toRemove || !toAdd) break;

      const index = intermediate.indexOf(toRemove);
      intermediate[index] = toAdd;
      steps.push([...intermediate]);
    }

    if (!this.arraysEqual(intermediate, target)) {
      steps.push([...target]);
    }

    return steps;
  }

  private static arraysEqual(a: FairyTrait[], b: FairyTrait[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }

  private static getTopFiveTraits(traits: FairyTraits): FairyTrait[] {
    return Object.entries(traits)
      .sort(([, a], [, b]) => (b ?? 0) - (a ?? 0))
      .slice(0, 5)
      .map(([k]) => k as FairyTrait);
  }

  static getAllPossibleSkills(): FairySkill[] {
    return Object.values(FairySkills);
  }
}
