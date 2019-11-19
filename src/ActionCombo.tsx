import React from "react";
import { Col } from "reactstrap";
import { ProgressAction } from "./Actions";
import { ViableProgressCombo } from "./filterViableProgressCombos";
import Action from "./Action";

interface ActionComboProps {
  combo: ViableProgressCombo;
  totalProgress: number;
}

export default (props: ActionComboProps) => {
  let accumulatedProgress = 0;
  return (
    <Col xs={12}>
      {props.combo.combo.map((progressAction: ProgressAction, index) => {
        accumulatedProgress += progressAction.progress;
        return (
          <Action
            name={progressAction.name}
            progress={progressAction.progress}
            accumulatedProgress={accumulatedProgress}
            totalProgress={props.totalProgress}
            key={index}
          />
        );
      })}
      <Action
        name={props.combo.finishingAction.name}
        progress={props.combo.finishingAction.progress}
        accumulatedProgress={
          accumulatedProgress + props.combo.finishingAction.progress
        }
        totalProgress={props.totalProgress}
      />
      {/* ({viableCombo.finishingAction.progress}) (CP used:{" "}
        {viableCombo.totalCp} Total progress:{" "}
        {viableCombo.totalAccumulatedProgress}) */}
    </Col>
  );
};
