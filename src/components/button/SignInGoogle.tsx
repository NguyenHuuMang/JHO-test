import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignInGoogle = () => {
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
        backgroundColor: "#FFF",
        color: "#DD5313",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon className="" icon={faGoogle} /> Continue with Google
    </div>
  );
};

export default SignInGoogle;
