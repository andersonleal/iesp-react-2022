import { ReactNode } from "react";

import Button from "../button/Button";
import classes from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  logout: () => void;
}
function Layout({ children, logout }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <nav>
        <Button onClick={logout}>Sair</Button>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
