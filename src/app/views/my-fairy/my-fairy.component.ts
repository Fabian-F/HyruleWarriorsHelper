import { Component } from '@angular/core';
import { Fairy, FairySkill, FairyTrait } from 'src/app/models';
import { CyclePlan, MyFairyGenerator } from './my-fairy-generator';

@Component({
  selector: 'hwh-my-fairy',
  templateUrl: './my-fairy.component.html',
  styleUrls: ['./my-fairy.component.scss']
})
export class MyFairyComponent {
  Object = Object;
  fairy: Fairy = {
    level: 0,
    skills: [],
    activeTraits: [],
    allTraits: {
      sparkly: 1,
      friendly: 1,
      resolute: 1,
      dizzy: 1,
      eager: 1,
      flashy_valiant: 1,
      smiley: 1,
      dreamy_aspiring: 1,
      fleet_shrewd: 1,
      soft_relaxed: 1
    }
  }
  plan: CyclePlan[] | null = null;
  allTraits = MyFairyGenerator.allTraits;
  perfectSkills = MyFairyGenerator.perfectSkills;

  toggleTrait(trait: FairyTrait) {
    if (this.fairy.activeTraits.includes(trait)) {
      this.fairy.activeTraits = this.fairy.activeTraits.filter(t => t !== trait);
    } else {
      this.fairy.activeTraits.push(trait);
    }
  }

  toggleSkill(skill: FairySkill) {
    const skillIndex = this.fairy.skills.findIndex(s => s.name === skill.name);
    if (skillIndex > -1) {
      this.fairy.skills.splice(skillIndex, 1);
    } else if (this.fairy.skills.length < 10) {
      this.fairy.skills.push(skill);
    }
  }

  getTraitChange(idx: number): { added: string, removed: string } | null {
    if (!this.plan || idx < 0 || idx >= this.plan.length - 1) return null;
    const currentTraits = this.plan[idx].targetTraits;
    const nextTraits = this.plan[idx + 1].targetTraits;
    const changedTrait = nextTraits.filter(t => !currentTraits.includes(t))[0];
    const removedTrait = currentTraits.filter(t => !nextTraits.includes(t))[0];
    const change = {
      added: this.getLabel(changedTrait),
      removed: this.getLabel(removedTrait)
    }
    return change;
  }

  getLabel(trait: FairyTrait): string {
    return trait
      .split('_')
      .map(t => t.charAt(0).toUpperCase() + t.slice(1))
      .join(' / ');
  }

  generatePlan() {
    this.plan = MyFairyGenerator.generatePlan(this.fairy);
  }

  getLearnedSkills(step: CyclePlan) {
    return step.skillGoals.map(skill => skill.name).join(', ');
  }

  getNumberOfLearntSkills() {
    if (!this.plan) return 0;
    const learnedSkills = this.plan.flatMap(step => step.skillGoals);
    return learnedSkills.length;
  }

  getNumberOfEmptyCycles() {
    if (!this.plan) return 0;
    return this.plan.filter(step => step.skillGoals.length === 0).length;
  }
}
