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

const ActionComboWrapper = styled(Col)``;

const ActionComboInner = styled.div`
  background: #d6d6d6;
  border-radius: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 10px 10px 0;

  @media (min-width: 576px) {
    padding-right: 150px;
    position: relative;
  }
`;

const arrowSize = 8;
const arrowSizeSm = 15;
const arrowColour = "#999";
const Arrow = styled.div`
  border-bottom: ${arrowSize}px solid transparent;
  border-left: ${arrowSize}px solid ${arrowColour};
  border-top: ${arrowSize}px solid transparent;
  height: 0;
  margin-top: 30px;
  width: 0;

  @media (min-width: 576px) {
    border-bottom: ${arrowSizeSm}px solid transparent;
    border-left: ${arrowSizeSm}px solid ${arrowColour};
    border-top: ${arrowSizeSm}px solid transparent;
    margin-top: 24px;
  }
`;
const ArrowWrapper = styled.div`
  display: inline-block;
  height: 97px;
  margin: 0 3px;
`;

const StatusText = styled.div`
  color: #fff;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 3px #666;
  width: 50%;

  @media (min-width: 576px) {
    position: absolute;
    right: 15px;
    text-align: left;
    width: auto;
  }
`;
const Durability = styled(StatusText)`
  top: 15px;
`;
const CP = styled(StatusText)`
  top: 42px;
`;

export default (props: ActionComboProps) => {
  let accumulatedProgress = 0;
  return (
    <ActionComboWrapper xs={12}>
      <ActionComboInner>
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
                boosted={progressAction.boosted}
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
          boosted={false}
        />
      </ActionComboInner>
    </ActionComboWrapper>
  );
};
