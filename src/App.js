import React, { useState } from "react";
import "./styles.scss";

import Billing from "./billing";
import Settings from "./settings";

const Header = ({ section, setSection }) => {
  const isBilling = section === "billing";
  const setBilling = () => setSection("billing");
  const setSettings = () => setSection("settings");

  return (
    <header>
      <nav>
        <a onClick={setBilling} className={isBilling ? "disabled" : ""}>
          Billing
        </a>
        <a onClick={setSettings} className={!isBilling ? "disabled" : ""}>
          Settings
        </a>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer>Legal notices and such</footer>;
};

const Main = ({ section }) => {
  return <main>{section === "billing" ? <Billing /> : <Settings />}</main>;
};

export default function App() {
  const [section, setSection] = useState("billing");

  return (
    <div id="app">
      <Header {...{ section, setSection }} />
      <Main section={section} />
      <Footer />
    </div>
  );
}
