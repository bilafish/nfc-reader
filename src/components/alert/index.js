import { h } from "preact";
import styled from "styled-components";
import { useState, useEffect } from "preact/hooks";

const AlertContainer = styled.div`
  background: #ffc86b;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: ${props => (props.nfcSupported ? "0px" : "16px")};
  opacity: ${props => (props.nfcSupported ? "0" : "0.7")};
  color: black;
  transition: opacity 1s linear 1s;
`;

const Alert = () => {
  const [nfcSupported, setNfcSupport] = useState(true);

  useEffect(() => {
    if (!("NDEFReader" in window)) {
      setNfcSupport(false);
    }
  }, []);
  return (
    <AlertContainer nfcSupported={nfcSupported}>
      <span>
        {nfcSupported
          ? ""
          : `Your browser might not be enabled to support NFC yet`}
      </span>
    </AlertContainer>
  );
};

export default Alert;
