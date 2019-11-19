import getActionIcon from "./ActionIcons";
import * as React from "react";
import styled from "styled-components";

const ActionWrapper = styled.span`
  display: inline-block;
  font-size: 10px;
  padding: 8px;
  text-align: center;
`;

const ActionImage = styled.img`
  margin-bottom: 3px;
`;

const ActionProgress = styled.span`
  display: block;
  width: 100%;
`;

interface ActionProps {
  name: string;
  progress: number;
  accumulatedProgress: number;
  totalProgress: number;
}

export default class Action extends React.Component<ActionProps> {
  render() {
    return (
      <ActionWrapper>
        <ActionImage
          src={getActionIcon(this.props.name)}
          width={60}
          alt={this.props.name}
          title={this.props.name}
        />
        <ActionProgress>+{this.props.progress}</ActionProgress>
        <ActionProgress>
          {this.props.accumulatedProgress} / {this.props.totalProgress}
        </ActionProgress>
      </ActionWrapper>
    );
  }
}
