import React from 'react'
import { Link } from 'react-router-dom'

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
    </div>
  )
}

export default NavBar
