import { FormEvent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/AuthService";
import UserService, { LoginRequest } from "../../services/UserService";
import Element from "./LoginPage";

function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputValues: LoginRequest = Array.from(form.elements).reduce(
      (acc, item) => {
        if (item.tagName === "INPUT") {
          const input = item as HTMLInputElement;
          return { ...acc, [input.name]: input.value };
        }
        return acc;
      },
      {} as LoginRequest
    );
    await UserService.login(inputValues);
    navigate("/users");
  }, []);

  useEffect(() => {
    if (AuthService.getToken()) {
      navigate("/users");
    }
  }, []);

  return <Element onSubmit={onSubmit} />;
}

export default LoginPage;
