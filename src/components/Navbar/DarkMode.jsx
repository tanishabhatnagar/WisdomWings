import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === "dark" ? (
        <FontAwesomeIcon
          icon={faMoon}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
          onClick={() => setTheme("light")}
        />
      ) : (
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faSun}
            className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
            onClick={() => setTheme("dark")}
          />
          <div className="hidden">Toggle</div>
        </div>
      )}
     
    </div>
  );
};

export default DarkMode;
