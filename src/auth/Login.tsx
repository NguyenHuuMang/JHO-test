import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fakeUser } from "./../api/fakeData";
import "./style.scss";

import circle from "../assets/images/circle.png";
import logo from "../assets/images/title-login.png";
import Button from "../components/button/Button";
import SignInFacebook from "../components/button/SignInFacebook";
import SignInGoogle from "../components/button/SignInGoogle";
import Input from "../components/input/Input";
import { useAuth } from "../components/context/AuthContext";
import { User } from "../common/type";

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
  const { login, setCurrentUser } = useAuth();

  useEffect(() => {
    const existingUserListing = localStorage.getItem("userListing");
    if (!existingUserListing) {
      const userListing = fakeUser;
      localStorage.setItem("userListing", JSON.stringify(userListing));
    }
  }, []);

  const formik = useFormik<ValuesForm>({
    initialValues: valueForm,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: handleLogin,
  });

  const { values, handleChange, handleBlur, errors, touched } = formik;
  async function handleLogin() {
    try {
      const userListingString = localStorage.getItem("userListing");
      if (userListingString) {
        const userListing = JSON.parse(userListingString);
        const user = userListing.find(
          (user: User) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          setCurrentUser(user);
          navigate("/dashboard");
          localStorage.setItem("token", user.token);
        } else {
          throw new Error("Email or Password is not matching!");
        }
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  }

  return (
    <div className="login-page">
      <img src={circle} alt="circle" className="bg-cirle" />
      <div className="login-form">
        <img src={logo} alt="logo" />
        <div className="content-login">
          <div className="title">
            <span className="title-connexion">Connexion</span>
            <span className="description-connexion">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
          <div className="form-submit">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-wrapper">
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <div className="distance-input">
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
                <div className="wrapper-forgot-password">
                  <span className="forgot-password"> Mot de passe oublié?</span>
                </div>
              </div>
              <Button onClick={handleLogin} style={{ marginTop: "28px" }}>
                Connexion
              </Button>
            </form>
            <div className="another-signin">
              <div className="border-other" />
              <span className="text-other">Or</span>
              <div className="border-other" />
            </div>
            <div className="signin-gg-fb">
              <SignInGoogle />
              <SignInFacebook />
              <div className="text-signup">
                <span className="not-a-member">Not a member?</span>
                <span className="signup-text">Inscription</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
