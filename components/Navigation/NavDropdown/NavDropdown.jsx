import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import css from "./NavDropdown.module.scss";

const NavDropdown = ({ isDropdownShown }) => {
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   console.log(dropdownRef);
  //   console.log(dropdownRef.current.scrollHeight);
  // });

  return (
    <div
      style={
        isDropdownShown
          ? { height: dropdownRef?.current?.scrollHeight + "px" }
          : { height: "0px" }
      }
      ref={dropdownRef}
      className={css.navigation_menu_content}
    >
      <ul className={css.menu_dropdown}>
        <li className={css.dropdown_item}>
          <Link
            className={`${css.nav_dropdown_link} ${
              pathname === "/websiteDesigning" && pathname !== "/"
                ? css.active_link
                : null
            } 
  ${pathname === "/" && css.nav_link_main}`}
            href="/websiteDesigning"
          >
            Website Designing
          </Link>
        </li>
        {/* <li className={css.dropdown_item}>
          <Link
            className={`${css.nav_dropdown_link} ${
              pathname === "/paying" && pathname !== "/"
                ? css.active_link
                : null
            } 
  ${pathname === "/" && css.nav_link_main}`}
            href="/paying">
            Pay Per Month Websites
          </Link>
        </li> */}
        <li className={css.dropdown_item}>
          <Link
            className={`${css.nav_dropdown_link} ${
              pathname === "/eCommerceSolutions" && pathname !== "/"
                ? css.active_link
                : null
            } 
  ${pathname === "/" && css.nav_link_main}`}
            href="/eCommerceSolutions"
          >
            E-Commerce Solutions
          </Link>
        </li>
        <li className={css.dropdown_item}>
          <Link
            className={`${css.nav_dropdown_link} ${
              pathname === "/websiteMaintenance" && pathname !== "/"
                ? css.active_link
                : null
            } 
  ${pathname === "/" && css.nav_link_main}`}
            href="/websiteMaintenance"
          >
            Website Maintenance
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavDropdown;
