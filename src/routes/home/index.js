import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";
import styled from "styled-components";
import ScanLottie from "../../components/scanlottie";
import SwitchSelector from "react-switch-selector";
import Alert from "../../components/alert";
import NfcConsole from "../../components/nfc-console";

const ScanButton = styled.button`
  background: #ffc86b;
  color: black;
  border: none;
  padding: 12px 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Home = () => {
  const [feed, setFeed] = useState("");
  const [buttonText, setButtonText] = useState("Start Scan");

  const options = [
    {
      label: "Read",
      value: "read",
      selectedBackgroundColor: "#581166"
    },
    {
      label: "Write",
      value: "write",
      selectedBackgroundColor: "#581166"
    }
  ];

  const onChange = newValue => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "read"
  );

  const nfcScan = async () => {
    try {
      const reader = new NDEFReader();
      await reader.scan();
      setButtonText("Scanning...");

      reader.addEventListener("error", () => {
        setFeed(feed => [
          ...feed,
          "Argh! Cannot read data from the NFC tag. Try a different one?"
        ]);
      });

      reader.addEventListener("reading", ({ message, serialNumber }) => {
        setFeed(`${serialNumber}`);
        // if (message.records.length > 0) {
        //   setFeed(feed => [...feed, `> Message: ${message.records[0]}`]);
        // }
      });
    } catch (error) {
      setFeed(feed => [...feed, `Argh! ${error}`]);
    }
  };

  const scanButtonHandler = () => {
    nfcScan();
  };

  return (
    <div class={style.home}>
      <Alert />
      <div class={style.toggle}>
        <SwitchSelector
          inputName="NFC Mode"
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"#f7f7f5"}
          fontColor={"#444"}
        />
      </div>
      <ScanLottie />
      <ScanButton onClick={scanButtonHandler}>{buttonText}</ScanButton>
      <NfcConsole feed={feed} />
    </div>
  );
};

export default Home;
