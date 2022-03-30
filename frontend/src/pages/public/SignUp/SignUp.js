import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { useNavigate, Link, } from "react-router-dom";

import signUpSchema from "./singUpSchema";

import {Footer, Navbar, Input} from "../../../components";
import AuthContext from "../../../context/auth-context";

import { PUBLIC } from "../../../constants/routes";


function SignUp() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (signUpState) => {
      // updateCheckoutContext(shippingState);

      setLoading(true);
      setLoggedIn(false);

      try {
        //await signUpWithEmailAndPassword(
          //signUpState.email,
          //signUpState.password,
        //);
        //const data = await sendUserData(signUpState.firstName);
        //const token = await getCurrentUserToken();
        login({
          email: signUpState.email,
          // token: token,
          // userId: data.data.userId,
        });
        navigate(PUBLIC.HOME);

        setLoggedIn(true);
      } catch (error) {
        setLoginError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Navbar pageTitle="Sign up" />
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            {/* <div className="col-3" /> */}
            <div className="col-6">
              <div className="row m-3">
                {loading}
                {loginError}
                {loggedIn}
                <Input
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  errorMessage={formik.errors.firstName}
                  hasErrorMessage={formik.touched.firstName}
                />
              </div>
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
              <div className="row m-3">
                <div className="col-3">
                  <button submitButton black>
                    Sign up
                  </button>
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

export default SignUp