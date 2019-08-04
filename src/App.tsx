import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

const multiplier = 2;

const SynthesisUI = styled.div`
  background: rgb(109,109,109);
  background: linear-gradient(180deg, rgba(109,109,109,1) 0%, rgba(65,65,65,1) 100%);
  border-radius: ${10 * multiplier}px;
  border: ${3 * multiplier}px solid #ad9063;
  height: ${200 * multiplier}px
  width: ${500 * multiplier}px;
`;
SynthesisUI.displayName = 'SynthesisUI';

const TopRow = styled.div`
  display: flex;
`;
TopRow.displayName = 'TopRow';

const SynthesisIcon = styled.div`
  background: red;
`;
SynthesisIcon.displayName = 'SynthesisIcon';

const SynthesisName = styled.div`
  color: #ccc;
  font-size: 24px;
`;
SynthesisName.displayName = 'SynthesisName';

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SynthesisUI>
            <TopRow>
              <SynthesisIcon>d</SynthesisIcon>
              <SynthesisName>Gold Ingot</SynthesisName>
            </TopRow>
          </SynthesisUI>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
