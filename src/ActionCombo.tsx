import React from "react";
import { Col } from "reactstrap";
import { ProgressAction } from "./Actions";
import { ViableProgressCombo } from "./filterViableProgressCombos";
import Action from "./Action";
import styled from "styled-components";

interface ActionComboProps {
  combo: ViableProgressCombo;
  totalProgress: number;
}

const ActionComboWrapper = styled(Col)`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const arrowSize = 15;
const Arrow = styled.div`
  border-bottom: ${arrowSize}px solid transparent;
  border-left: ${arrowSize}px solid #bbb;
  border-top: ${arrowSize}px solid transparent;
  height: 0;
  margin-top: 24px;
  width: 0;
`;
const ArrowWrapper = styled.div`
  display: inline-block;
  height: 97px;
  margin: 0 5px;
`;

const Durability = styled.div``;
const CP = styled.div``;

export default (props: ActionComboProps) => {
  let accumulatedProgress = 0;
  return (
    <ActionComboWrapper xs={12}>
      <Durability>Durability: {props.combo.durability}</Durability>
      <CP>CP: {props.combo.totalCp}</CP>
      {props.combo.combo.map((progressAction: ProgressAction, index) => {
        accumulatedProgress += progressAction.progress;
        return (
          <React.Fragment key={index}>
            <Action
              name={progressAction.name}
              progress={progressAction.progress}
              accumulatedProgress={accumulatedProgress}
              totalProgress={props.totalProgress}
            />
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </React.Fragment>
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
    </ActionComboWrapper>
  );
};
