import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bulma-dropdown'
import 'react-bulma-dropdown/dist/main.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-item'>
        Home
      </Link>
      <Link to='/login' className='navbar-item'>
        Login
      </Link>
      <Link to='/register' className='navbar-item'>
        Register
      </Link>
      <Link to='/doctors' className='navbar-item'>
        View doctors
      </Link>
      <Link to='/appointments' className='navbar-item'>
        Appointments
      </Link>
      <Link to='/newappointment' className='navbar-item'>
        New Appointment
      </Link>
      <Dropdown trigger='Appointments' className='navbar-item'>
        <Link to='/appointments' className='dropdown-item'>
          All Appointments
        </Link>
        <Link to='/newappointment' className='dropdown-item'>
          New Appointment
        </Link>
      </Dropdown>
    </div>
  )
}

export default NavBar
