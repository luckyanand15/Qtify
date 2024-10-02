import React from "react";
import LogoImage from "../../assets/logo.png";
import Styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={Styles.logo}>
      <img src={LogoImage} alt="logo" width={67} />
    </div>
  );
}
