import Image from "next/image";
import React from "react";
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
  return (
    <div className="">
      <Image
        src="/images/logo.png"
        width={0}
        height={0}
        className="w-32 h-auto ml-4"
        alt="Cyrus Logo"
        sizes="100vh"
      />
      <div className="flex flex-col px-10 py-12">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Please enter login details bellow
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginFormContainer;
