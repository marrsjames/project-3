import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-item">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        <span>Home</span>
      </Link>
      <Link to="/about" className="navbar-item">
        <span class="icon">
          <i class="fas fa-book-reader"></i>
        </span>
        <span>Our Story</span>
      </Link>
      <Link to="/coronavirus" className="navbar-item">
        <span class="icon">
          <i class="fas fa-viruses"></i>
        </span>
        <span>Coronavirus</span>
      </Link>
      <Link to="/doctors" className="navbar-item">
        <span class="icon">
          <i class="fas fa-user-md"></i>
        </span>
        <span>View Doctors</span>
      </Link>
      <Link to="/appointments" className="navbar-item">
        <span class="icon">
          <i class="fas fa-calendar-check"></i>
        </span>
        <span>Appointments</span>
      </Link>
      <Link to="/newappointment" className="navbar-item">
        <span class="icon">
          <i class="fas fa-calendar"></i>
        </span>
        <span>Book Appointment</span>
      </Link>
      <Link to="/login" className="navbar-item navbar-end">
        <span class="icon">
          <i class="fas fa-sign-in-alt"></i>
        </span>
        <span>Login</span>
      </Link>
      <Link to="/register" className="navbar-item">
        <span class="icon">
          <i class="fas fa-user-plus"></i>
        </span>
        <span>Register</span>
      </Link>
    </div>
  );
};

export default NavBar;
