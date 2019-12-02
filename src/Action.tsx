import getActionIcon from "./ActionIcons";
import * as React from "react";
import styled from "styled-components";

interface ActionProps {
  name: string;
  progress: number;
  accumulatedProgress: number;
  totalProgress: number;
}

const ActionWrapper = styled.span<{
  accumulatedProgress: number;
  totalProgress: number;
}>`
  background: ${props =>
    props.accumulatedProgress >= props.totalProgress ? "#dfd" : "#efefef"};
  border: 1px solid
    ${props =>
      props.accumulatedProgress >= props.totalProgress ? "#70b970" : "#aaa"};
  border-radius: 5px;
  display: inline-block;
  font-size: 10px;
  margin-bottom: 10px;
  padding: 5px 7px;
  text-align: center;
`;

const ActionImage = styled.img`
  margin-bottom: 3px;
`;

const ActionProgress = styled.span`
  display: block;
  width: 100%;
`;

export default class Action extends React.Component<ActionProps> {
  render() {
    return (
      <ActionWrapper
        accumulatedProgress={this.props.accumulatedProgress}
        totalProgress={this.props.totalProgress}
      >
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
