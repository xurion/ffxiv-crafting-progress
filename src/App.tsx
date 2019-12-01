import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import Header from "./Header";
import progressCombos from "./ProgressCombos";
import filterViableProgressCombos, {
  ViableProgressCombo
} from "./filterViableProgressCombos";
import ActionCombo from "./ActionCombo";

interface AppProps {}

interface AppState {
  totalProgress: number;
  hundredPercentEfficiencyProgress: number;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const defaults = this.getDefaultValues();
    this.state = {
      totalProgress: defaults.totalProgress,
      hundredPercentEfficiencyProgress:
        defaults.hundredPercentEfficiencyProgress
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
    this.persistTotalProgress = this.persistTotalProgress.bind(this);
    this.setTotalProgress = this.setTotalProgress.bind(this);
    this.increaseTotalProgress = this.increaseTotalProgress.bind(this);
    this.decreaseTotalProgress = this.decreaseTotalProgress.bind(this);
  }

  persistTotalProgress(progress: number) {
    window.localStorage.setItem("totalProgress", progress.toString());
  }

  setTotalProgress(totalProgress: number) {
    this.setState({ totalProgress });
    this.persistTotalProgress(totalProgress);
  }

  increaseTotalProgress(increment: number = 1) {
    this.setTotalProgress(this.state.totalProgress + increment);
  }

  decreaseTotalProgress(decrement: number = 1) {
    this.setTotalProgress(this.state.totalProgress - decrement);
  }

  getDefaultValues = () => {
    const storedTotalProgress = window.localStorage.getItem("totalProgress");
    const storedHundredPercentEfficiencyProgress = window.localStorage.getItem(
      "hundredPercentEfficiencyProgress"
    );

    return {
      totalProgress: storedTotalProgress ? parseInt(storedTotalProgress) : 350,
      hundredPercentEfficiencyProgress: storedHundredPercentEfficiencyProgress
        ? parseInt(storedHundredPercentEfficiencyProgress)
        : 100
    };
  };

  handleFieldFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select();

  handleTotalProgressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    this.setTotalProgress(isNaN(value) ? 0 : value);
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
      this.increaseTotalProgress();
    } else if (event.key === "ArrowDown") {
      this.decreaseTotalProgress();
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
            <ActionCombo
              combo={viableCombo}
              totalProgress={this.state.totalProgress}
              key={index}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
