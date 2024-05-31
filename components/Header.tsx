"use client";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faHeadSideCough,
  faHome,
  faPeopleGroup,
  faPooStorm,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Routes = [
  {
    name: "Home",
    icon: faHome,
    path: "/",
    style: {
      width: "30px",
      height: "30px",
    },
  },
  {
    name: "Terms",
    icon: faSitemap,
    path: "/terms",
    style: {
      width: "30px",
      height: "30px",
    },
  },
  {
    name: "Reviews",
    icon: faPeopleGroup,
    path: "/login",
    style: {
      width: "30px",
      height: "30px",
    },
  },
  {
    name: "Mission",
    icon: faSteam,
    path: "/mission",
    style: {
      width: "25px",
      height: "25px",
    },
  },
  {
    name: "Vission",
    icon: faPooStorm,
    path: "/vission",
    style: {
      width: "25px",
      height: "25px",
    },
  },
  {
    name: "About",
    icon: faHeadSideCough,
    path: "/about",
    style: {
      width: "30px",
      height: "30px",
    },
  },
  {
    name: "Contact",
    icon: faContactBook,
    path: "/contact",
    style: {
      width: "25px",
      height: "25px",
    },
  },
];

function Header() {
  const pathname = usePathname();
  return (
    <div className="fixed z-[999] flex justify-between flex-row space-x-2 px-[20px] py-[10px] top-0 bg-gradient-to-tr from-amber-200 to-amber-100  rounded-b-3xl shadow-2xl w-[60%] h-[80px]">
      {Routes.map((data, index) => (
        <Link
          href={data.path}
          key={index}
          className="flex cursor-pointer p-2 bg-white/35 rounded-2xl w-[120px] flex-col place-items-center space-y-2"
        >
          <FontAwesomeIcon
            icon={data.icon}
            style={data.style}
            color={pathname == data.path ? "#F59E0B" : "#FBDA6B"}
          />
          <div
            className={`${
              pathname == data.path
                ? "bg-amber-500 text-white "
                : "bg-amber-200 text-black/70"
            } flex text-[14px] font-bold transition-all duration-700 rounded-xl place-items-center place-content-center w-[60px] h-[20px]`}
          >
            <h1>{data.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Header;
