import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import NavBar from "./NavBar";
import { navLinks } from "./SideBar";

type PropTypes = {
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbar = ({ setVisible }: PropTypes) => {
  return (
    <div className="absolute inset-0 bg-white flex flex-col gap-y-4">
      <div className="px-4 flex items-center h-16 justify-between shadow-lg">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={0}
            height={0}
            className="h-16 w-auto"
            alt="Cyrus Logo"
            sizes="100vh"
          />
        </Link>
        <Button variant="ghost" onClick={() => setVisible(false)}>
          <X />
        </Button>
      </div>
      <NavBar navLinks={navLinks} />
    </div>
  );
};

export default MobileNavbar;
