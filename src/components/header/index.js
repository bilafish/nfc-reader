import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <div class={style.logo}>
      <img src="../../assets/logo.png" width="30" height="30" />
      <h1>
        <strong>
          web<span>nfc</span>
        </strong>
      </h1>
    </div>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/about">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
