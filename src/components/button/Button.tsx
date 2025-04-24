import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      style={{
        width: 402,
        height: 52,
        borderRadius: 3,
        paddingTop: 15,
        paddingRight: 55,
        paddingBottom: 15,
        paddingLeft: 55,
        gap: 10,
        fontSize: "16px",
        border: "none",
        backgroundColor: "#DD5313",
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
        ...props.style,
      }}
      className={`btn ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
});

export default Button;
