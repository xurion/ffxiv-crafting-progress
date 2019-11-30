import BasicSynthesisIcon from "./images/BasicSynthesis.png";
import CarefulSynthesisIcon from "./images/CarefulSynthesis.png";
import MuscleMemoryIcon from "./images/MuscleMemory.png";
import FinalAppraisalIcon from "./images/FinalAppraisal.png";

interface iconMapInterface {
  [key: string]: string;
}

const iconMap: iconMapInterface = {
  "Basic Synthesis": BasicSynthesisIcon,
  "Careful Synthesis": CarefulSynthesisIcon,
  "Muscle Memory": MuscleMemoryIcon,
  "Final Appraisal": FinalAppraisalIcon
};

export default (actionName: string): string => iconMap[actionName];
