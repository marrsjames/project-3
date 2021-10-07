import React from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/auth.js";

const Register = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    formData: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(state.formData);
      console.log(res.status);
      if (res.status === 200) {
        history.push("/login");
      }
    } catch (err) {
      console.error("Error registering user", err.res.data);
    }
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    };

    console.log("Testing for formdata", state.formData.email);

    setState({ formData });
  };

  return (
    <>
      <h1>Register</h1>
      <div id="registration-form">
        <form onSubmit={handleSubmit}>
          <div id="username">
            <label>Username</label>
            <input
              placeholder="Username"
              name={"username"}
              type="text"
              value={state.formData.username}
              onChange={handleChange}
            />
          </div>

          <div id="email">
            <label>Email</label>
            <input
              placeholder="Email"
              name={"email"}
              type="email"
              value={state.formData.email}
              onChange={handleChange}
            />
          </div>

          <div id="password">
            <label>Password</label>
            <input
              placeholder="Password"
              name={"password"}
              type="password"
              value={state.formData.password}
              onChange={handleChange}
            />
          </div>

          <div id="confirmPassword">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm password"
              name={"passwordConfirmation"}
              type="password"
              value={state.formData.passwordConfirmation}
              onChange={handleChange}
            />
          </div>

          <div id="submit-button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
