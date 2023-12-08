"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import NavDropdown from "./NavDropdown/NavDropdown";

import css from "./Navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const isMainPage = pathname === "/";

  const isServicesActive =
    pathname === "/websiteDesigning" ||
    pathname === "/paying" ||
    pathname === "/eCommerceSolutions" ||
    (pathname === "/websiteMaintenance" && pathname !== "/");

  const handleDropdownOpen = () => {
    setIsDropdownShown(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownShown(false);
  };

  return (
    <nav className={css.nav_container}>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <Link
            //Home link color depending on whether it is a main page or some other page
            className={`
             ${pathname === "/" ? css.main_page_home_link : css.nav_link}`}
            href="/">
            Home
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            // Link color for current path and color behavior for this link on the main page
            className={`${css.nav_link}
            
             ${
               pathname === "/aboutUs" && pathname !== "/"
                 ? css.active_link
                 : null
             } 
             
            ${pathname === "/" && css.nav_link_main}`}
            href="/aboutUs">
            About Us
          </Link>
        </li>
        <li
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
          className={`${css.nav_item} ${css.nav_dropdown_item}`}>
          <div className={`${css.dropdown_unit}`}>
            <span
              // behavior of a text depending on whether it is the main page or some other page.
              className={`${css.dropdown_btn_text} ${
                isMainPage ? css.nav_link_main : css.nav_link
              }`}
              // Text color when any dropdown page was selected
              style={{
                color: isServicesActive && "var(--linkActiveColor)",
              }}>
              Services
            </span>
            {isDropdownShown ? (
              <FontAwesomeIcon
                icon={faMinus}
                // colors of minus icon on the main page and all other pages
                style={{
                  width: "10px",
                  color: !isMainPage
                    ? "var(--linkActiveColor)"
                    : "var(--accentColor)",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className={css.plus}
                // colors of plus icon on the main page and all other pages
                style={{
                  width: "10px",
                  color: isServicesActive && "var(--linkActiveColor)",
                }}
              />
            )}
          </div>
          {isDropdownShown && <NavDropdown />}
        </li>

        <li className={css.nav_item}>
          <Link
            // Link color for current path and color behavior for this link on the main page
            className={`${css.nav_link} ${
              pathname === "/portfolio" && pathname !== "/"
                ? css.active_link
                : null
            } 
            ${pathname === "/" && css.nav_link_main}`}
            href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            // Link color for current path and color behavior for this link on the main page
            className={`${css.nav_link} ${
              pathname === "/faq" && pathname !== "/" ? css.active_link : null
            } 
            ${pathname === "/" && css.nav_link_main}`}
            href="/faq">
            FAQ
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            // Link color for current path and color behavior for this link on the main page
            className={`${css.nav_link} ${
              pathname === "/contact" && pathname !== "/"
                ? css.active_link
                : null
            } 
            ${pathname === "/" && css.nav_link_main}`}
            href="/contact">
            Contact
          </Link>
        </li>
        <li className={css.nav_item}>
          <Link
            // Link color for current path and color behavior for this link on the main page
            className={`${css.nav_link} ${
              pathname === "/clientPortal" && pathname !== "/"
                ? css.active_link
                : null
            } 
            ${pathname === "/" && css.nav_link_main}`}
            href="/clientPortal">
            Client Portal
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
