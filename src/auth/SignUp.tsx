import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./style.scss";
import Swal from "sweetalert2";

import circle from "../assets/images/circle.png";
import logo from "../assets/images/title-login.png";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { User } from "../common/type";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleRegister,
  });

  const { values, handleChange, handleBlur, errors, touched } = formik;

  async function handleRegister() {
    setErrorMessage("");
    setSuccessMessage("");

    const userListingStr = localStorage.getItem("userListing");
    const userListing: User[] = userListingStr
      ? JSON.parse(userListingStr)
      : [];

    const userExists = userListing.some((u) => u.email === values.email);

    if (userExists) {
      setErrorMessage("Email already exists. Please use another.");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      email: values.email,
      name: values.name,
      password: values.password,
      role: "User",
      avatar: "",
    };

    userListing.push(newUser);
    localStorage.setItem("userListing", JSON.stringify(userListing));

    await Swal.fire({
      title: "Succès!",
      text: "Inscription réussie ! Vous pouvez vous connecter.",
      icon: "success",
      confirmButtonText: "OK",
    });

    navigate("/login");
  }

  return (
    <div className="login-page">
      <img src={circle} alt="circle" className="bg-cirle" />
      <div className="login-form">
        <img src={logo} alt="logo" />
        <div className="content-login">
          <div className="title">
            <span className="title-connexion">Inscription</span>
            <span className="description-connexion">
              Create your account to access the dashboard.
            </span>
          </div>
          <div className="form-submit">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-wrapper">
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
                <div className="distance-input">
                  <Input
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.name}
                    touched={touched.name}
                  />
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
              </div>
              <Button type="submit" style={{ marginTop: "28px" }}>
                Registre
              </Button>
            </form>
            <div className="signin-gg-fb" style={{ marginTop: "16px" }}>
              <span className="not-a-member">Vous avez déjà un compte?</span>
              <span className="signup-text" onClick={() => navigate("/login")}>
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
