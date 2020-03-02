import { h } from "preact";
import Lottie from "react-lottie";
import animationData from "./scanning.json";

const ScanLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={true}
      isPaused={true}
    />
  );
};

export default ScanLottie;
