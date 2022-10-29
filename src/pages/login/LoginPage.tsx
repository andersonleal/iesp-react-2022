import { FormEventHandler } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/input/Input";
import LoginContainer from "./LoginContainer";

interface LoginPageProps {
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
}

function LoginPage({ onSubmit }: LoginPageProps) {
  return (
    <LoginContainer title={"Login"} buttonTitle={"Login"} onSubmit={onSubmit}>
      <Input type="email" name={"email"} placeholder={"email"} />
      <Input type="text" name={"password"} placeholder={"senha"} />
      <Link to={"/signup"}>Criar conta</Link>
    </LoginContainer>
  );
}

export default LoginPage;
