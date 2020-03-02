import { h } from "preact";
import style from "./style";
import ScanLottie from "../../components/scanlottie";
import SwitchSelector from "react-switch-selector";

const Home = () => {
  if (typeof window !== "undefined") {
    if ("NDEFReader" in window) {
      alert("NFC Supported");
    }
  }
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

  return (
    <div class={style.home}>
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
    </div>
  );
};

export default Home;
