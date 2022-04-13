import React from "react";
import classes from "./MyInut.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.myInput} />;
});

export default MyInput;
