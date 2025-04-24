import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "./../api/fakeData";
import "./style.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

import background from "../assets/images/background.png";
import circle from "../assets/images/circle.png";
import logo from "../assets/images/title-login.png";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import SignInFacebook from "../components/button/SignInFacebook";
import SignInGoogle from "../components/button/SignInGoogle";

type ValuesForm = {
  email: string;
  password: string;
};

const valueForm: ValuesForm = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formik = useFormik<ValuesForm>({
    initialValues: valueForm,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleLogin,
  });

  const { values, handleChange, handleBlur, errors, touched } = formik;
  function handleLogin() {
    if (
      values.email === fakeUser.email &&
      values.password === fakeUser.password
    ) {
      localStorage.setItem("token", fakeUser.token);
      navigate("/dashboard");
    } else {
      setErrorMessage("Email or Password is not matching!");
    }
  }

  return (
    <div
      className="position-relative w-100 vh-100 d-flex justify-content-center align-items-center login"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={circle}
        alt="circle"
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: "62%",
          height: "75%",
          objectFit: "contain",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div className="d-flex align-items-center justify-content-center align-self-centera h-100">
        <div className="login-form">
          <img src={logo} alt="logo" />
          <div className="d-flex flex-column" style={{ gap: "60px" }}>
            <div className="d-flex flex-column gap-8px">
              <span className="title-connexion">Connexion</span>
              <span className="description-connexion">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
            </div>
            <div className="d-flex flex-column" style={{ gap: "28px" }}>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-column gap-8px">
                  {errorMessage && (
                    <div className="text-danger mb-2 fw-bold">
                      {errorMessage}
                    </div>
                  )}
                  <div className="d-flex flex-column" style={{ gap: "12px" }}>
                    <Input
                      placeholder="Email Address"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email}
                      touched={touched.email}
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </div>
                  <div className="d-flex w-100 align-items-end justify-content-end ">
                    <span className="forgot-password">
                      {" "}
                      Mot de passe oublié?
                    </span>
                  </div>
                </div>
                <Button onClick={handleLogin} style={{ marginTop: "28px" }}>
                  Connexion
                </Button>
              </form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
                />
                <span style={{ padding: "0 10px", fontWeight: "bold" }}>
                  Or
                </span>
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
                />
              </div>
              <div className="d-flex flex-column gap-2">
                <SignInGoogle />
                <SignInFacebook />
                <div
                  className="d-flex flex-row align-items-center justify-content-center"
                  style={{ marginTop: "12px", gap: "12px" }}
                >
                  <span className="not-a-member">Not a member?</span>
                  <span className="signup-text">Inscription</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
