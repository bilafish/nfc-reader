import { h } from "preact";
import style from "./style";

const Home = () => {
  if (typeof window !== "undefined") {
    if ("NDEFReader" in window) {
      alert("NFC Supported");
    }
  }

  return (
    <div class={style.home}>
      <h1>home</h1>
      <p>Welcome to Home</p>
    </div>
  );
};

export default Home;
