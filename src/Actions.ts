export interface ProgressAction {
  name: string;
  cp: number;
  efficiencyMultiplier: number;
  additionalEfficiencyMultiplier: number;
  progress?: number;
}

export function MuscleMemory(): ProgressAction {
  return {
    name: "Muscle Memory",
    cp: 6,
    efficiencyMultiplier: 3,
    additionalEfficiencyMultiplier: 2
  };
}

export function BasicSynthesis(): ProgressAction {
  return {
    name: "Basic Synthesis",
    cp: 0,
    efficiencyMultiplier: 1,
    additionalEfficiencyMultiplier: 1
  };
}

export function CarefulSynthesis(): ProgressAction {
  return {
    name: "Careful Synthesis",
    cp: 7,
    efficiencyMultiplier: 1.2,
    additionalEfficiencyMultiplier: 1
  };
}
