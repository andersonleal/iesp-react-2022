import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/AuthService";
import Element from "./Layout";

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const navigate = useNavigate();
  const logout = useCallback(() => {
    AuthService.logout();
    navigate("/");
  }, []);
  return <Element {...props} logout={logout} />;
}

export default Layout;
