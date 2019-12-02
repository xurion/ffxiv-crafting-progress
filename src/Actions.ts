export interface ProgressAction {
  name: string;
  cp: number;
  efficiencyMultiplier: number;
  additionalEfficiencyMultiplier: number;
  progress: number;
  limitNextProgressByOne: boolean;
  boosted: boolean;
}

export function MuscleMemory(): ProgressAction {
  return {
    name: "Muscle Memory",
    cp: 6,
    efficiencyMultiplier: 3,
    additionalEfficiencyMultiplier: 2,
    progress: 0,
    limitNextProgressByOne: false,
    boosted: false
  };
}

export function BasicSynthesis(): ProgressAction {
  return {
    name: "Basic Synthesis",
    cp: 0,
    efficiencyMultiplier: 1,
    additionalEfficiencyMultiplier: 1,
    progress: 0,
    limitNextProgressByOne: false,
    boosted: false
  };
}

export function CarefulSynthesis(): ProgressAction {
  return {
    name: "Careful Synthesis",
    cp: 7,
    efficiencyMultiplier: 1.2,
    additionalEfficiencyMultiplier: 1,
    progress: 0,
    limitNextProgressByOne: false,
    boosted: false
  };
}

export function FinalAppraisal(): ProgressAction {
  return {
    name: "Final Appraisal",
    cp: 1,
    efficiencyMultiplier: 0,
    additionalEfficiencyMultiplier: 1,
    progress: 0,
    limitNextProgressByOne: true,
    boosted: false
  };
}
