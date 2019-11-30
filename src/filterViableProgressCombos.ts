import { ProgressCombo } from "./ProgressCombos";
import { ProgressAction } from "./Actions";

export interface ViableProgressCombo extends ProgressCombo {
  totalCp: number;
  totalAccumulatedProgress: number;
}

export default (
  hundredPercentEfficiencyProgress: number,
  totalProgress: number,
  progressCombos: ProgressCombo[]
) => {
  const viableCombos: ViableProgressCombo[] = [];

  progressCombos.forEach((progressCombo: ProgressCombo) => {
    let accumulatedProgress = 0;
    let previousMultiplier = 1;
    let nextProgressLimitProgressByOne = false;
    let totalCp = 0;

    progressCombo.combo.forEach((progressAction: ProgressAction) => {
      const actionProgress = Math.floor(
        hundredPercentEfficiencyProgress *
          progressAction.efficiencyMultiplier *
          previousMultiplier
      );

      if (
        accumulatedProgress + actionProgress > totalProgress &&
        nextProgressLimitProgressByOne
      ) {
        progressAction.progress = totalProgress - accumulatedProgress - 1;
        accumulatedProgress = totalProgress - 1;
      } else {
        accumulatedProgress += actionProgress;
        progressAction.progress = actionProgress;
      }

      totalCp += progressAction.cp;

      if (progressAction.efficiencyMultiplier > 0) {
        previousMultiplier = progressAction.additionalEfficiencyMultiplier;
      }

      nextProgressLimitProgressByOne = progressAction.limitNextProgressByOne;
    });

    const finishingProgress = Math.floor(
      hundredPercentEfficiencyProgress *
        progressCombo.finishingAction.efficiencyMultiplier
    );

    accumulatedProgress += finishingProgress;
    progressCombo.finishingAction.progress = finishingProgress;

    totalCp += progressCombo.finishingAction.cp;

    if (accumulatedProgress >= totalProgress) {
      const viableCombo: ViableProgressCombo = {
        ...progressCombo,
        totalCp,
        totalAccumulatedProgress: accumulatedProgress
      };

      viableCombos.push(viableCombo);
    }
  });

  return viableCombos;
};
