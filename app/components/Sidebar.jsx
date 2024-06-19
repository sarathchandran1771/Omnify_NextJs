"use client";

import classNames from "classnames";
import { useMemo, useState } from "react";
import LogoIcon from "@/public/icons/Logo";
import CollapsIcon from "@/public/icons/CollapsIcon";
import ArticleIcon from "@/public/icons/ArticleIcon";
import VideoIcon from "@/public/icons/VideoIcon";
import LogoutMenu from "@/public/icons/tezt.jsx"
import CalenderIcon from "@/public/icons/CalenderIcon";
import WaitlistConfirm from "@/public/icons/WaitList";
import { usePathname } from "next/navigation"; 
import Link from "next/link";

const menuItems = [
  { id: 1, label: "Orders", icon: ArticleIcon, link: "/orders" },
  { id: 2, label: "Subscriptions", icon: VideoIcon, link: "/subscriptions" },
  { id: 3, label: "Calender", icon: CalenderIcon, link: "/Calender" },
  { id: 4, label: "Waitlist", icon: WaitlistConfirm, link: "/" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathname = usePathname(); 

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-slate-100 absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-slate-100 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };
  

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg text-text font-bold", {
                hidden: toggleCollapse,
              })}
            >
              Front-Desk
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={classNames(
                        "text-md font-medium text-text-light"
                      )}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({ id: 0, label: "", link: "" })} py-4`}>
      {toggleCollapse && (  <div style={{ width: "2rem" }}>
           <LogoutMenu />
        </div>
      )}
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            <LogoutMenu />
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
