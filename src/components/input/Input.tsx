import { InputHTMLAttributes, forwardRef } from "react";
import "./style.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  touched?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, touched, ...props }, ref) => {
    const showError = touched && error;

    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={`${props.className || ""} input-component${
            showError ? " error" : ""
          }`}
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
