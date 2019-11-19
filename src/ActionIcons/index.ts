import BasicSynthesisIcon from "./images/BasicSynthesis.png";
import CarefulSynthesisIcon from "./images/CarefulSynthesis.png";
import MuscleMemoryIcon from "./images/MuscleMemory.png";

interface iconMapInterface {
  [key: string]: string;
}

const iconMap: iconMapInterface = {
  "Basic Synthesis": BasicSynthesisIcon,
  "Careful Synthesis": CarefulSynthesisIcon,
  "Muscle Memory": MuscleMemoryIcon
};

export default (actionName: string): string => iconMap[actionName];
