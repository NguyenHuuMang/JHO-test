import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SignInFacebook = () => {
  return (
    <div className="btn-login-fb">
      <FontAwesomeIcon className="" icon={faFacebookF} /> Continue with Facebook
    </div>
  );
};

export default SignInFacebook;
