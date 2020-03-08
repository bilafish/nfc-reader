import { h } from "preact";
import style from "./style";
import ScanLottie from "../../components/scanlottie";
import SwitchSelector from "react-switch-selector";
import Alert from "../../components/alert";

const Home = () => {
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
    </div>
  );
};

export default Home;
