import React from "react";
import classes from "./style.module.css";

type PropTypes = {
  className?: HTMLSpanElement["className"];
};

const ButtonLoader = ({ className }: PropTypes) => {
  return (
    <div className={`${classes.loading} gap-1`}>
      <span className={`h-4 ${className}`} />
      <span className={`h-4 ${className}`} />
      <span className={`h-4 ${className}`} />
      <span className={`h-4 ${className}`} />
      <span className={`h-4 ${className}`} />
    </div>
  );
};

export default ButtonLoader;
