import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

type PropTypes = {
  title?: string;
  children: ReactNode;
};

const Page = ({ title, children }: PropTypes) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <SideBar />
        <main className="col-span-9 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto shadow-lg p-8">
          {!!title ? <p className="font-bold text-xl mb-4">{title}</p> : null}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Page;
