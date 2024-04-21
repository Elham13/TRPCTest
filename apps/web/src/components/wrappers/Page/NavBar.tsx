"use client";
import React, { Fragment, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavLink } from "@/lib/types";

type PropTypes = {
  navLinks: INavLink[];
  isChild?: boolean;
};

const NavBar = ({ navLinks, isChild }: PropTypes) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleClick = (nav: INavLink) => {
    if (nav?.children && nav?.children?.length > 0) setNavOpen((prev) => !prev);
  };

  const parentClassNames = `flex flex-col gap-y-2 transition-all overflow-hidden ${
    isChild ? "ml-4 " : "ml-0"
  }`;

  const itemClassNames = `flex items-center px-4 gap-x-2 transition mr-4 rounded-tr-lg rounded-br-lg py-2 cursor-pointer ${
    isChild ? "border-l-2 border-orange-500" : "border-none"
  }`;

  return (
    <ul className={parentClassNames}>
      {navLinks?.map((nav, index) => (
        <Fragment key={index}>
          <li
            onClick={() => handleClick(nav)}
            className={`${itemClassNames} ${
              pathname === nav.link
                ? "bg-orange-500 text-slate-100"
                : "hover:bg-slate-200"
            }`}
          >
            {nav.icon || null}
            {nav?.children && nav?.children?.length > 0 ? (
              <div className="flex items-center justify-between w-full">
                {nav?.title}
                <ChevronRight
                  size={18}
                  className={`transition-all ${
                    navOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
            ) : (
              <Link href={nav.link || "/"} className="w-full">
                {nav.title}
              </Link>
            )}
          </li>
          {nav?.children && nav?.children?.length > 0 && navOpen ? (
            <NavBar navLinks={nav?.children} isChild={true} />
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
};

export default NavBar;
