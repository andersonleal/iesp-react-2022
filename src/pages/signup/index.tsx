import { FormEvent, useCallback } from "react";

import UserService, { SignUpRequest } from "../../services/UserService";
import Element from "./SignupPage";

function SignupPage() {
  const onSubmit = useCallback(async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const inputValues: SignUpRequest = Array.from(form.elements).reduce(
      (acc, item) => {
        if (item.tagName === "INPUT") {
          const input = item as HTMLInputElement;
          return { ...acc, [input.name]: input.value };
        }
        return acc;
      },
      {} as SignUpRequest
    );
    await UserService.signup(inputValues);
    await UserService.login(inputValues);
  }, []);

  return <Element onSubmit={onSubmit} />;
}

export default SignupPage;
