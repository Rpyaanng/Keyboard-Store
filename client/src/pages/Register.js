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
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { user, showAlert, isLoading, displayAlert, setupUser } =
    useAppContext();

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login/Register";
  }, []);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, isMember } = values;

    if (!email || ((!firstName || !lastName) && !isMember) || !password) {
      console.log(values);
      displayAlert();
      return;
    }
    if (isMember) {
      setupUser(
        { email, password, firstName, lastName },
        "login",
        "Login Successful! Redirecting..."
      );
    } else {
      setupUser(
        { email, password, firstName, lastName },
        "register",
        "Registration Successful! Redirecting..."
      );
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <>
            <FormRow
              type="text"
              labelText="First Name"
              name="firstName"
              value={values.firstName}
              handleChange={handleChange}
              className="form-input"
            />
            <FormRow
              type="text"
              labelText="Last Name"
              name="lastName"
              value={values.lastName}
              handleChange={handleChange}
              className="form-input"
            />
          </>
        )}
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
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
