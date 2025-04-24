import { ButtonHTMLAttributes, forwardRef } from "react";
import "./style.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`button-component ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
});

export default Button;
