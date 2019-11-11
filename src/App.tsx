import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import Header from "./Header";
import progressCombos from "./ProgressCombos";
import filterViableProgressCombos, {
  ViableProgressCombo
} from "./filterViableProgressCombos";
import { ProgressAction } from "./Actions";

interface AppProps {}

interface IAppState {
  totalProgress: number;
  hundredPercentEfficiencyProgress: number;
}

export default class App extends React.Component<AppProps, IAppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      totalProgress: 2100,
      hundredPercentEfficiencyProgress: 1000
    };

    this.handleTotalProgressChange = this.handleTotalProgressChange.bind(this);
    this.handleTotalProgressKeyDown = this.handleTotalProgressKeyDown.bind(
      this
    );
    this.handleHundredPercentEfficiencyProgressKeyDown = this.handleHundredPercentEfficiencyProgressKeyDown.bind(
      this
    );
    this.handleHundredPercentEfficiencyProgressChange = this.handleHundredPercentEfficiencyProgressChange.bind(
      this
    );
  }

  handleFieldFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select();

  handleTotalProgressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    this.setState({ totalProgress: isNaN(value) ? 0 : value });
  }

  handleHundredPercentEfficiencyProgressChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = parseInt(event.target.value);
    this.setState({
      hundredPercentEfficiencyProgress: isNaN(value) ? 0 : value
    });
  }

  handleTotalProgressKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      this.setState({ totalProgress: this.state.totalProgress + 1 });
    } else if (event.key === "ArrowDown") {
      this.setState({ totalProgress: this.state.totalProgress - 1 });
    }
  }

  handleHundredPercentEfficiencyProgressKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "ArrowUp") {
      this.setState({
        hundredPercentEfficiencyProgress:
          this.state.hundredPercentEfficiencyProgress + 1
      });
    } else if (event.key === "ArrowDown") {
      this.setState({
        hundredPercentEfficiencyProgress:
          this.state.hundredPercentEfficiencyProgress - 1
      });
    }
  }

  render() {
    const viableCombos = filterViableProgressCombos(
      this.state.hundredPercentEfficiencyProgress,
      this.state.totalProgress,
      progressCombos
    );

    return (
      <Container>
        <Header />
        <Row>
          <Col xs={12} sm={6}>
            Total Progress:{" "}
            <Input
              value={this.state.totalProgress}
              onFocus={this.handleFieldFocus}
              onKeyDown={this.handleTotalProgressKeyDown}
              onChange={this.handleTotalProgressChange}
            />
          </Col>
          <Col xs={12} sm={6}>
            100% efficiency progress:{" "}
            <Input
              value={this.state.hundredPercentEfficiencyProgress}
              onFocus={this.handleFieldFocus}
              onKeyDown={this.handleHundredPercentEfficiencyProgressKeyDown}
              onChange={this.handleHundredPercentEfficiencyProgressChange}
            />
          </Col>
          <Col xs={12}>
            <h2>Viable combos</h2>
          </Col>
          {viableCombos.map((viableCombo: ViableProgressCombo, index) => (
            <Col xs={12} key={index}>
              {viableCombo.combo.map(
                (progressAction: ProgressAction, index) => (
                  <React.Fragment key={index}>
                    <span>
                      {progressAction.name} ({progressAction.progress})
                    </span>
                    <span> > </span>
                  </React.Fragment>
                )
              )}
              {viableCombo.finishingAction.name} (
              {viableCombo.finishingAction.progress}) (CP used:{" "}
              {viableCombo.totalCp} Total progress:{" "}
              {viableCombo.totalAccumulatedProgress})
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
