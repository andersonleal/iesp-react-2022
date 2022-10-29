import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

import classes from "./Input.module.scss";
interface InputProps {
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  name?: string | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

function Input(props: InputProps) {
  return <input {...props} className={classes.input} />;
}

export default Input;
