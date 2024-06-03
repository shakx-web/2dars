import React from "react";
import { header, container, logo, list, storeBtn } from "./style.module.css";

export default function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <a href="" className={logo}>
          LOGO
        </a>
        <nav>
          <ul className={list}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <button className={storeBtn}>Store</button>
      </div>
    </header>
  );
}
