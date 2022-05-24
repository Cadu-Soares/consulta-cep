import React, { useState, useEffect } from "react";
import "../Styles/Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    setDisplay((state) => (showMenu ? "flex" : "none"));
  }, [showMenu]);

  return (
      <div className="menu"
        onClick={() => setShowMenu(!showMenu)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <a className="hamburger-toggle"/>
        <br />
        <aside className="menu-area" style={{ display: display }}>
          <ul>
            <li>Voltar ao menu</li>
            <li>CLique e Retire</li>
            <li>Locker</li>
            <li>Agência Modular</li>
            <li>Veja Também</li>
          </ul>
        </aside>
      </div>
  );
};

export default Header;
