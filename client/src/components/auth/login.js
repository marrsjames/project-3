import React from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/auth.js";
import { setToken } from "../../api/token.js";

const Login = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    formData: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(state.formData);
      if ((res.status === 200) | (res.status === 202)) {
        setToken(res.data.token);
        // callback();
        history.push("/home");
      }
    } catch (err) {
      console.error("Error logging in user", err);
    }
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    };

    setState({ formData });
  };

  return (
    <>
      <h1>Login</h1>
      <div id="login-form">
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label>Email</label>
            <input
              className="input"
              placeholder="Email"
              name={"email"}
              value={state.formData.email}
              onChange={handleChange}
            />
          </div>

          <div id="password">
            <label>Password</label>
            <input
              className="input"
              placeholder="Password"
              name="password"
              type="password"
              value={state.formData.password}
              onChange={handleChange}
            />
          </div>

          <div id="submit-button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
