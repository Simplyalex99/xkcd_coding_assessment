import React, { useState, useRef } from "react";
import "../styles/header.css";
import "../styles/global.css";
import { NavigationItems } from "../data/navigation_items";
import { HamburgerMenuIcon, CloseIcon } from "../icons/index";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
const Navigation = () => {
  return (
    <ul className="navigation" role="navigation">
      {NavigationItems.map((item, index) => {
        return (
          <li key={index} className="navigation-link">
            {index == NavigationItems.length - 1 ? (
              <a className="navigation-link-cta" href={item.url}>
                {item.name}
              </a>
            ) : (
              <a href={item.url}>{item.name}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  useOnClickOutside(sidebarRef, () => setIsOpen(false));
  return (
    <header id="header">
      <div className="flex-container container-sm">
        <a className="cta" href="#">
          XKCD
        </a>

        {/* Large screens */}
        <div className="hidden-small-screen">
          <Navigation></Navigation>
        </div>

        {/* Medium and small screens */}
        <div className="hamburger-menu" onClick={() => setIsOpen(true)}>
          <HamburgerMenuIcon></HamburgerMenuIcon>
        </div>
        <div ref={sidebarRef} className={isOpen ? "sidebar-menu" : "hidden"}>
          <Navigation></Navigation>
          <div className="close-icon-container">
            <div className="close-icon" onClick={() => setIsOpen(false)}>
              <CloseIcon fill="#FFF"></CloseIcon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
