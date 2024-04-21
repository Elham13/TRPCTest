"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav className="px-4 shadow-lg flex items-center h-16 justify-between">
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

      {!visible ? (
        <Button
          variant="ghost"
          className="block sm:hidden"
          onClick={() => setVisible(true)}
        >
          <Menu />
        </Button>
      ) : (
        <MobileNavbar setVisible={setVisible} />
      )}
    </nav>
  );
};

export default Header;
