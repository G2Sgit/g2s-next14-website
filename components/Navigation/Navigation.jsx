"use client";
import React from "react";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import css from "./Navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();

  const isServicesActive =
    pathname === "/websiteDesigning" ||
    pathname === "/paying" ||
    pathname === "/eCommerceSolutions" ||
    pathname === "/websiteMaintenance";

  return (
    <NavigationMenu.Root className={css.nav_container}>
      <NavigationMenu.List className={css.nav_list}>
        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/" ? css.active_link : null
            }`}
            href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/aboutUs" ? css.active_link : null
            }`}
            href="/aboutUs">
            About Us
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Trigger className={`${css.drop_down_btn}`}>
            <span
              className={`${css.drop_down_btn_text}`}
              style={{
                color: isServicesActive && "var(--linkActiveColor)",
              }}>
              Services
            </span>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={`${css.navigation_menu_content}`}>
            <ul className={css.menu_drop_down}>
              <NavigationMenu.Link
                className={`${css.nav_drop_down_link} ${
                  pathname === "/websiteDesigning" ? css.active_link : null
                }`}
                href="/websiteDesigning">
                Website Designing
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className={`${css.nav_drop_down_link} ${
                  pathname === "/paying" ? css.active_link : null
                }`}
                href="/paying">
                Pay Per Month Websites
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className={`${css.nav_drop_down_link} ${
                  pathname === "/eCommerceSolutions" ? css.active_link : null
                }`}
                href="/eCommerceSolutions">
                E-Commerce Solutions
              </NavigationMenu.Link>
              <NavigationMenu.Link
                className={`${css.nav_drop_down_link} ${
                  pathname === "/websiteMaintenance" ? css.active_link : null
                }`}
                href="/websiteMaintenance">
                Website Maintenance
              </NavigationMenu.Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/portfolio" ? css.active_link : null
            }`}
            href="/portfolio">
            Portfolio
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/faq" ? css.active_link : null
            }`}
            href="/faq">
            FAQ
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/contact" ? css.active_link : null
            }`}
            href="/contact">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={css.nav_item}>
          <NavigationMenu.Link
            className={`${css.nav_link} ${
              pathname === "/clientPortal" ? css.active_link : null
            }`}
            href="/clientPortal">
            Client Portal
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navigation;
