import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isAuthenticated }) => {
  return (
    <div className="navbar">
      {isAuthenticated ? (
        <>
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

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              <span class="icon">
                <i class="fas fa-calendar-check"></i>
              </span>
              <span>Appointments</span>
            </div>
            <div class="navbar-dropdown">
              <Link to="/appointments" className="navbar-item">
                <span>View Appointments</span>
              </Link>
              <Link to="/newappointment" className="navbar-item">
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="navbar-item navbar-end">
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>Logout</span>
          </Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default NavBar;
