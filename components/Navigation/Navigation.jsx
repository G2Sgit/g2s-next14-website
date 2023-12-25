"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaMinus, FaPlus } from "react-icons/fa";

import NavDropdown from "./NavDropdown/NavDropdown";

import css from "./Navigation.module.scss";
import BurgerBtn from "../Header/ContactsLine/BurgerBtn/BurgerBtn";
import MobileNavigationContacts from "../Header/ContactsLine/MobileNavigationContacts/MobileNavigationContacts";

const Navigation = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const dropRef = useRef(null);
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  // useEffect(() => {
  //   console.log(dropRef);
  //   console.log(dropRef.current);
  //   console.log(dropRef.current?.scrollHeight);
  // });

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
    <>
      <nav
        className={
          isOpen ? `${css.nav_container} ${css.isOpen}` : `${css.nav_container}`
        }
      >
        <BurgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />

        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <Link
              //Home link color depending on whether it is a main page or some other page
              className={`
             ${pathname === "/" ? css.main_page_home_link : css.nav_link}`}
              href="/"
              onClick={() => setIsOpen(!isOpen)}
            >
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
            
            href="/aboutUs"
            onClick={() => setIsOpen(!isOpen)}
            >
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
              <FaMinus
                // colors of minus icon on the main page and all other pages
                style={{
                  width: "10px",
                  color: !isMainPage
                    ? "var(--linkActiveColor)"
                    : "var(--accentColor)",
                }}
              />
            ) : (
              <FaPlus
                className={css.plus}
                // colors of plus icon on the main page and all other pages
                style={{
                  color: isServicesActive && "var(--linkActiveColor)",
                }}
              />
            )}
          </div>

          <NavDropdown isDropdownShown={isDropdownShown} />
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
              href="/portfolio"
              onClick={() => setIsOpen(!isOpen)}
            >
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
              href="/faq"
              onClick={() => setIsOpen(!isOpen)}
            >
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
              href="/contact"
              onClick={() => setIsOpen(!isOpen)}
            >
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
              href="/clientPortal"
              onClick={() => setIsOpen(!isOpen)}
            >
              Client Portal
            </Link>
          </li>
        </ul>

        {isOpen && (
          <MobileNavigationContacts
            email={"hi@g2s.com"}
            phoneNumber={"380670000000"}
            address={"124 City Road, London, EC1V 2NX"}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
