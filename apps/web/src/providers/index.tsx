import React from "react";
import { ProvidersPropTypes } from "@/lib/types/providers";
import AuthProvider from "./AuthProvider";

const Providers = ({ children }: ProvidersPropTypes) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
