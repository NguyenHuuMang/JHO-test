import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  touched?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, touched, ...props }, ref) => {
    const showError = touched && error;

    return (
      <div style={{ marginBottom: 16 }}>
        <input
          ref={ref}
          {...props}
          style={{
            width: 402,
            height: 52,
            borderRadius: 3,
            borderWidth: 1,
            background: "#FFFFFF",
            border: showError ? "1px solid red" : "1px solid #FFFFFF",
            padding: "0 12px",
            fontSize: 16,
            fontWeight: 600,
            color: "#161629",
            ...props.style,
          }}
          className={`form-control ${props.className || ""}`}
        />
        {showError && (
          <div style={{ color: "red", fontSize: 13, marginTop: 4 }}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
