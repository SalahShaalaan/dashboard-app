"use client";
import { useState } from "react";
import Divider from "./Divider";
import NavLink from "./NavLink";
import Image from "next/image";
import * as sideBarIcons from "@/public/sideBarIcons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: "Dashboard", href: "/", icon: sideBarIcons.dashboardIcon },
    { name: "Products", href: "/products", icon: sideBarIcons.productsIcon },
    { name: "Favorites", href: "/favorites", icon: sideBarIcons.favoriteIcon },
    { name: "Inbox", href: "/inbox", icon: sideBarIcons.inboxIcon },
    { name: "Order List", href: "/order-list", icon: sideBarIcons.listIcon },
    { name: "Product Stock", href: "/product-stock", icon: sideBarIcons.stockIcon },
  ];

  const pages = [
    { name: "Pricing", href: "/pricing", icon: sideBarIcons.pricingIcon },
    { name: "To-Do", href: "/to-do", icon: sideBarIcons.toDoIcon },
    { name: "Contact", href: "/contact", icon: sideBarIcons.contactIcon },
    { name: "Invoice", href: "/invoice", icon: sideBarIcons.invoiceIcon },
    { name: "Team", href: "/team", icon: sideBarIcons.teamIcon },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-full transition-all duration-300 ${isOpen ? "left-[232px]" : "left-4"
          } md:hidden`}
      >
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        }
      </button>

      <aside
        className={`fixed md:static md:min-h-screen top-0 left-0 w-64 bg-white dark:bg-SecDarkBg text-black dark:text-darkText transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40`}
      >
        <div className="p-6 overflow-y-auto">
          <nav className="mt-8 md:mt-0">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    href={link.href}
                    className="flex items-center p-2 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={link.icon}
                      width={22}
                      height={22}
                      alt="icon"
                      className="w-5 h-5 mr-3"
                    />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <Divider />
            <ul className="space-y-4">
              <p className="my-6 font-bold text-sm leading-tight opacity-75">
                Pages
              </p>
              {pages.map((link) => (
                <li key={link.name}>
                  <NavLink
                    href={link.href}
                    className="flex items-center p-2 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={link.icon}
                      width={25}
                      height={25}
                      alt="icon"
                      className="w-5 h-5 mr-3"
                    />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <Divider />
          </nav>
        </div>
      </aside>
    </>
  );
}