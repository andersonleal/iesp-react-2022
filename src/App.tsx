import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spinner from "./components/spinner/Spinner";

const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));
const Users = lazy(() => import("./pages/users"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/users"} element={<Users />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
