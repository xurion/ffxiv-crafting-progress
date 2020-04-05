import {
  MuscleMemory,
  BasicSynthesis,
  CarefulSynthesis,
  ProgressAction,
  FinalAppraisal
} from "./Actions";

export interface ProgressCombo {
  combo: ProgressAction[];
  durability: number;
  finishingAction: ProgressAction;
}

const combos: ProgressCombo[] = [
  //10 Durability
  { combo: [], finishingAction: BasicSynthesis(), durability: 10 },
  { combo: [], finishingAction: CarefulSynthesis(), durability: 10 },
  { combo: [], finishingAction: MuscleMemory(), durability: 10 },

  //20 Durability
  {
    combo: [BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 20
  },
  {
    combo: [CarefulSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 20
  },
  {
    combo: [CarefulSynthesis()],
    finishingAction: CarefulSynthesis(),
    durability: 20
  },
  {
    combo: [MuscleMemory()],
    finishingAction: BasicSynthesis(),
    durability: 20
  },
  {
    combo: [MuscleMemory()],
    finishingAction: CarefulSynthesis(),
    durability: 20
  },

  //30 Durability
  {
    combo: [BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [MuscleMemory(), FinalAppraisal(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis(),
    durability: 30
  },
  {
    combo: [MuscleMemory(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 30
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis(),
    durability: 30
  },

  //40 Durability
  {
    combo: [BasicSynthesis(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [CarefulSynthesis(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [CarefulSynthesis(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis(),
    durability: 40
  },
  {
    combo: [MuscleMemory(), BasicSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), BasicSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: BasicSynthesis(),
    durability: 40
  },
  {
    combo: [MuscleMemory(), CarefulSynthesis(), CarefulSynthesis()],
    finishingAction: CarefulSynthesis(),
    durability: 40
  },

  //50 Durability
  {
    combo: [
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis(),
    durability: 50
  },
  {
    combo: [
      MuscleMemory(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 50
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis(),
    durability: 50
  },

  //60 Durability
  {
    combo: [
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      BasicSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: BasicSynthesis(),
    durability: 60
  },
  {
    combo: [
      MuscleMemory(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis(),
      CarefulSynthesis()
    ],
    finishingAction: CarefulSynthesis(),
    durability: 60
  }
];

export default combos;
