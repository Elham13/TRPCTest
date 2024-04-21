import LoginFormContainer from "@/components/forms";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <LoginFormContainer />
      <div className="hidden sm:block">
        <Image
          src="/images/water.jpg"
          width={0}
          height={0}
          className="w-full h-screen"
          alt="Water image"
          sizes="100vh"
        />
      </div>
    </div>
  );
};

export default Login;
