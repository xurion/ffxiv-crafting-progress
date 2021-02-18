import getActionIcon from "./ActionIcons";
import * as React from "react";
import styled from "styled-components";

interface ActionProps {
  name: string;
  progress: number;
  accumulatedProgress: number;
  totalProgress: number;
  boosted: boolean;
}

const ActionWrapper = styled.span<ActionProps>`
  background: ${(props) => {
    let bg = "#efefef";
    if (props.boosted) {
      bg = "#ccf";
    } else if (props.accumulatedProgress >= props.totalProgress) {
      bg = "#dfd";
    }
    return bg;
  }};
  border: 1px solid
    ${(props) =>
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
    const title = `${this.props.name}${
      this.props.boosted ? " (boosted by Muscle Memory)" : ""
    }`;
    return (
      <ActionWrapper {...this.props} title={title}>
        <ActionImage
          src={getActionIcon(this.props.name)}
          width={60}
          alt={this.props.name}
        />
        <ActionProgress>+{this.props.progress}</ActionProgress>
        <ActionProgress>
          {this.props.accumulatedProgress} / {this.props.totalProgress}
        </ActionProgress>
      </ActionWrapper>
    );
  }
}
