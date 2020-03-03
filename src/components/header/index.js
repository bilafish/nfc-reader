import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import MenuIcon from "../menuicon";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Header = () => {
  const mediaQuery = useMediaQuery("(min-width:600px)");

  return (
    <header class={style.header}>
      <div class={style.logo}>
        <img src="../../assets/logo.png" width="30" height="30" />
        <h1>
          <strong>
            web<span>nfc</span>
          </strong>
        </h1>
      </div>
      {mediaQuery ? (
        <nav>
          <Link activeClassName={style.active} href="/">
            Home
          </Link>
          <Link activeClassName={style.active} href="/about">
            About
          </Link>
        </nav>
      ) : (
        <span class={style.menu}>
          <MenuIcon />
        </span>
      )}
    </header>
  );
};

export default Header;
