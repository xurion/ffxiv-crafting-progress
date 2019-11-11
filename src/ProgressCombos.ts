import {
  MuscleMemory,
  BasicSynthesis,
  CarefulSynthesis,
  ProgressAction
} from "./Actions";

export interface ProgressCombo {
  combo: ProgressAction[];
  finishingAction: ProgressAction;
}

const combos: ProgressCombo[] = [
  { combo: [], finishingAction: BasicSynthesis() },
  { combo: [], finishingAction: CarefulSynthesis() },
  { combo: [MuscleMemory()], finishingAction: BasicSynthesis() },
  { combo: [MuscleMemory()], finishingAction: CarefulSynthesis() },
  {
    combo: [MuscleMemory(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  }
];

export default combos;
