import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { user, showAlert, isLoading, displayAlert, setupUser } =
    useAppContext();

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Admin Login";
  }, []);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    setupUser({ email, password }, "login", "Login Successful! Redirecting...");
    displayAlert();
  };

  return (
    <Wrapper className="">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{"Admin Login"}</h3>
        {showAlert && <Alert />}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="form-input"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="btn btn-block">
          {isLoading ? "...Waiting" : "Login"}
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
