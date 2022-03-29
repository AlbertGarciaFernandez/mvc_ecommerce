import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { useHistory, Link } from "react-router-dom";

import signInSchema from "./signInSchema";

import Footer from "../../../components/Footer";

import { PUBLIC } from "../../../constants/routes";


function SignIn() {
  return (
    <>
      
      <div className="container flex-grow-1 align-items-center">
        <div className="row">
          
          <form onSubmit={Formik.handleSubmit}>
            <div className="col-3" />
            <div className="col-6">
              <div className="row m-3">
                <input
                  id="email"
                  type="email"
                  label="E-mail"
                  placeholder="example@example.com"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  value={Formik.values.email}
                  errorMessage={Formik.errors.email}
                  hasErrorMessage={Formik.touched.email}
                />
              </div>
              <div className="row m-3">
                <input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  value={Formik.values.password}
                  errorMessage={Formik.errors.password}
                  hasErrorMessage={Formik.touched.password}
                />
              </div>
              <div className="d-flex m-4">
                <div className="col-6">
                  <button submitButton black>
                    Sign in
                  </button>
                </div>
                <div className="col-2 ms-auto">
                  <Link to={PUBLIC.SIGNUP}>
                    <button black>Sign up</button>
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

export default SignIn