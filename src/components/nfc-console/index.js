import { h } from "preact";
import styled from "styled-components";

const ConsoleContainer = styled.div`
  background: #581166;
  opacity: 0.95;
  width: 100vw;
  height: calc(100vh - 600px);
  border-radius: 20px 20px 0 0;
  color: #f7f7f5;
  padding: 20px 20px;
`;

const FieldTitle = styled.span`
  font-size: 12px;
  color: #a24db3;
`;

const NfcConsole = props => {
  return (
    <ConsoleContainer>
      <FieldTitle>SERIAL NUMBER</FieldTitle>
      <p>{props.feed}</p>
    </ConsoleContainer>
  );
};

export default NfcConsole;
