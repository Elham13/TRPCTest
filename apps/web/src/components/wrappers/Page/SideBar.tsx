import React from "react";
import NavBar from "./NavBar";
import { INavLink } from "@/lib/types";
import {
  Activity,
  AlignVerticalDistributeCenter,
  BadgeDollarSign,
  Headset,
  Home,
  Landmark,
  List,
  ListTodo,
  TicketMinus,
} from "lucide-react";

export const navLinks: INavLink[] = [
  {
    title: "Home",
    link: "/",
    icon: <Home size={18} />,
  },
  {
    title: "Water Purifier",
    icon: <List size={18} />,
    children: [
      {
        title: "Total Sales",
        link: "/wp/total-sales",
        icon: <BadgeDollarSign size={18} />,
      },
      {
        title: "Telecalling Data",
        link: "/wp/telecalling-data",
        icon: <Headset size={18} />,
      },
      {
        title: "Stock Reports",
        link: "/wp/stock-reports",
        icon: <Activity size={18} />,
      },
      {
        title: "Pending Services",
        link: "/wp/pending-services",
        icon: <ListTodo size={18} />,
      },
      {
        title: "Expenses",
        link: "/wp/expenses",
        icon: <TicketMinus size={18} />,
      },
    ],
  },
  {
    title: "Distribution",
    link: "/distribution",
    icon: <AlignVerticalDistributeCenter size={18} />,
  },
  {
    title: "Real Estate",
    link: "/real-estate",
    icon: <Landmark size={18} />,
  },
];

const SideBar = () => {
  return (
    <aside className="hidden sm:block col-span-3 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto shadow-lg py-4">
      <NavBar navLinks={navLinks} />
    </aside>
  );
};

export default SideBar;
