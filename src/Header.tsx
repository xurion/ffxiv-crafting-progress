import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const HeaderRow = styled(Row)``;

export default () => {
  return (
    <HeaderRow>
      <Col xs={12}>
        <h1 className="text-center text-sm-left">FFXIV Crafting Progress</h1>
      </Col>
    </HeaderRow>
  );
};
