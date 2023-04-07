import React from "react";
import Styles from "./NavContainer.module.css";

function NavContainer() {
  return (
    <div className={Styles.navbar}>
      <a className={Styles.log_container} href="">
        <span className={Styles.moviedb}>MovieCast</span>
      </a>
      <img className={Styles.logo} src="" alt="" />
    </div>
  );
}

export default NavContainer;
