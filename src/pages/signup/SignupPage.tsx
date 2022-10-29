import { FormEventHandler } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/input/Input";
import LoginContainer from "../login/LoginContainer";

interface SignupPageProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

function SignupPage({ onSubmit }: SignupPageProps) {
  return (
    <LoginContainer
      title={"Cadastro"}
      buttonTitle={"Cadastrar"}
      onSubmit={onSubmit}
    >
      <Input type="text" name={"nome"} placeholder={"Nome"} />
      <Input type="email" name={"email"} placeholder={"E-mail"} />
      <Input type="password" name={"password"} placeholder={"Senha"} />
      <Link to={"/"}>login</Link>
    </LoginContainer>
  );
}

export default SignupPage;
