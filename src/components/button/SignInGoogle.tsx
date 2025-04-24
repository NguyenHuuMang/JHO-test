import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignInGoogle = () => {
  return (
    <div className="btn-login-gg">
      <FontAwesomeIcon className="" icon={faGoogle} /> Continue with Google
    </div>
  );
};

export default SignInGoogle;
