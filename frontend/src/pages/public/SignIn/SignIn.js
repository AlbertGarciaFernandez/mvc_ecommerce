import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

import signInSchema from "./signInSchema";

import { Footer, Navbar, Input } from "../../../components";
import AuthContext from "../../../context/auth-context";

import { PUBLIC } from "../../../constants/routes";

import { signInWithEmailAndPassword } from "../../../firebase/firebase";

function SignIn() {
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (signInState) => {
      try {
        await signInWithEmailAndPassword(
          signInState.email,
          signInState.password
        );
        //const data = await syncUserData();
        // const token = await getCurrentUserToken();
        login({
          email: signInState.email,
          //token: token,
          //userId: data.data.userId._id,
        });

        navigate(PUBLIC.HOME);
      } catch (error) {
        setLoginError(error.message);
      }
    },
  });

  return (
    <>
      <Navbar pageTitle="Sign in" />
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          {loginError}
          <form onSubmit={formik.handleSubmit}>
            <div className="col-3" />
            <div className="col-6">
              <div className="row m-3">
                <Input
                  id="email"
                  type="email"
                  label="E-mail"
                  placeholder="example@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  errorMessage={formik.errors.email}
                  hasErrorMessage={formik.touched.email}
                />
              </div>
              <div className="row m-3">
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  errorMessage={formik.errors.password}
                  hasErrorMessage={formik.touched.password}
                />
              </div>
              <div className="d-flex m-4">
                <div className="col-6">
                  <button className="ms-3 btn btn-outline-dark medium-text">
                    Sign in
                  </button>
                </div>
                <div className="col-2 ms-auto">
                  <Link to={PUBLIC.SIGNUP}>
                    <button className="ms-3 btn btn-outline-dark medium-text">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
