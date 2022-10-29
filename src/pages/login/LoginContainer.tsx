import { FormEventHandler, ReactNode } from "react";

import Button from "../../components/button/Button";
import classes from "./LoginContainer.module.scss";

interface LoginContainerProps {
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  title: string;
  buttonTitle: string;
  children: ReactNode;
}

function LoginContainer({
  children,
  onSubmit,
  title,
  buttonTitle,
}: LoginContainerProps) {
  return (
    <div className={classes.loginPage}>
      <div className={classes.loginPage__content}>
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <Button type={"submit"}>{buttonTitle}</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;
