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
  //10 durability
  { combo: [], finishingAction: BasicSynthesis() },
  { combo: [], finishingAction: CarefulSynthesis() },
  { combo: [], finishingAction: MuscleMemory() },

  //20 durability
  { combo: [BasicSynthesis()], finishingAction: BasicSynthesis() },
  { combo: [CarefulSynthesis()], finishingAction: BasicSynthesis() },
  { combo: [CarefulSynthesis()], finishingAction: CarefulSynthesis() },
  { combo: [MuscleMemory()], finishingAction: BasicSynthesis() },
  { combo: [MuscleMemory()], finishingAction: CarefulSynthesis() },

  //30 durability
  {
    combo: [BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis()
  },
  //{ combo: [MuscleMemory(), FinalAppriasal(), BasicSynthesis()], finishingAction: BasicSynthesis() },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis()
  },
  {
    combo: [MuscleMemory(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis()
  },

  //40 durability
  {
    combo: [BasicSynthesis(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis()
  },
  {
    combo: [MuscleMemory(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis()
  },

  //50 durability
  {
    combo: [
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis()
  },

  //60 durability
  {
    combo: [
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis()
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis()
  }
];

export default combos;
