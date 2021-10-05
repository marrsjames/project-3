import React from "react";
import registerUser from "../../api/auth.js";

const Register = () => {
  const [regUser, setRegUser] = React.useState({
    formData: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(state.formData);
      if (response.status === 200) {
        history.pushState("/login");
      }
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  const handleChange = (event) => {
    const formData = {
      ...state.formData,
      [event.target.name]: event.target.value,
    };

    setRegUser({ formData });
  };

  return (
    <>
      <div>
        <h1>Registration Form</h1>
      </div>
      <div className="email-block">
        <form>
          {" "}
          onSubmit={handleSubmit}
          <input placeholder="johndoe@seisurgery.com" name="Email"></input>
          <input placeholder="password" name="Password"></input>
        </form>
      </div>
    </>
  );
};

export default Register;
