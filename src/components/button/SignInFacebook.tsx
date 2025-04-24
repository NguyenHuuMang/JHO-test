import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SignInFacebook = () => {
  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center"
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
        backgroundColor: "#415A93",
        color: "#FFFF",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon className="" icon={faFacebookF} /> Continue with Facebook
    </div>
  );
};

export default SignInFacebook;
