import type { ReactNode } from "react";
import { Component } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}

interface ButtonState {
  click: boolean;
}

export class ButtonClass extends Component<ButtonProps, ButtonState> {
  state = {
    click: false,
  };

  componentDidMount() {
    console.log("button did mount");
  }

  // componentWillMount() {  deprecated
  //   console.log('hahah')
  // }

  componentWillUnmount() {
    console.log("button will unmount");
  }

  componentDidUpdate(
    prevProps: Readonly<ButtonProps>,
    prevState: Readonly<ButtonState>
  ) {
    console.log("did update", prevState, this.state);
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({
            click: true,
          })
        }
        className={classes.button}
      >
        {this.props.children} Clicks{" "}
        {this.state.click ? "clicou" : "nao clicou"}
      </button>
    );
  }
}

export default Button;
