import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bulma-dropdown'
import 'react-bulma-dropdown/dist/main.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-home'></i>
        </span>
        <span>Home</span>
      </Link>
      <Link to='/about' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-book-reader'></i>
        </span>
        <span>Our Story</span>
      </Link>
      <Link to='/coronavirus' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-viruses'></i>
        </span>
        <span>Coronavirus</span>
      </Link>
      <Link to='/doctors' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-user-md'></i>
        </span>
        <span>View Doctors</span>
      </Link>
      {/* <Dropdown trigger='Appointments'>
        <Link to='/appointments' className='dropdown-item'>
          All Appointments
        </Link>
        <Link to='/newappointment' className='dropdown-item'>
          New Appointment
        </Link>
      </Dropdown> */}
      <Link to='/appointments' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-calendar-check'></i>
        </span>
        <span>Appointments</span>
      </Link>
      <Link to='/newappointment' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-calendar'></i>
        </span>
        <span>Book Appointment</span>
      </Link>
      <Link to='/login' className='navbar-item navbar-end'>
        <span className='icon'>
          <i className='fas fa-sign-in-alt'></i>
        </span>
        <span>Login</span>
      </Link>
      <Link to='/register' className='navbar-item'>
        <span className='icon'>
          <i className='fas fa-user-plus'></i>
        </span>
        <span>Register</span>
      </Link>
    </div>
  )
}

export default NavBar
