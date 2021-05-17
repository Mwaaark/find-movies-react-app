import React from "react";
import classes from "./Card.module.css";

export default function Card({ children, className }) {
  const classNames = `${classes.card} ${className || ""}`;

  return <div className={classNames}>{children}</div>;
}
