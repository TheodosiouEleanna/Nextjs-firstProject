import Link from "next/link";
import classes from "./button.module.css";
import React from "react";

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
