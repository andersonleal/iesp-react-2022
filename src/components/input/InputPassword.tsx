import { ChangeEvent, useCallback, useState } from "react";

import Input from "./Input";

function InputPassword() {
  const [password, setPassword] = useState("");

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  }, []);

  console.log({ password });
  return <Input type={"password"} onChange={onChange} />;
}

export default InputPassword;
