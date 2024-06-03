import React from "react";
import { title } from "./style.module.css";

function Title({ text }) {
  return <h2 className={title}>{text}</h2>;
}

export default Title;
