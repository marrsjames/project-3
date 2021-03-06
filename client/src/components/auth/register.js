import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../api/auth.js'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      firstName: '',
      surname: '',
      password: '',
      dateOfBirth: '',
      gender: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(state.formData)
      console.log(res.status)
      if (res.status === 201) {
        history.push('/login')
      }
    } catch (err) {
      console.error('Error registering user', err.res)
    }

    alert('Thank you for registering. We will get back to you shortly!')
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }

    setState({ formData })
  }

  return (
    <div className='section'>
      <h1 className='title has-text-centered'>Registration Form</h1>
      <div id='registration-form'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Username</label>
            <input
              className='input'
              placeholder='Username'
              name={'username'}
              type='text'
              value={state.formData.username}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Email</label>
            <input
              className='input'
              placeholder='e.g. johndoe@seisurgery.com'
              name={'email'}
              type='email'
              value={state.formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Password</label>
            <input
              className='input'
              placeholder='Password'
              name={'password'}
              type='password'
              value={state.formData.password}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Confirm Password</label>
            <input
              className='input'
              placeholder='Confirm password'
              name={'passwordConfirmation'}
              type='password'
              value={state.formData.passwordConfirmation}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>First Name</label>
            <input
              className='input'
              placeholder='e.g. John'
              name={'firstName'}
              type='text'
              value={state.formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Surname</label>
            <input
              className='input'
              placeholder='e.g. Doe'
              name={'surname'}
              type='text'
              value={state.formData.surname}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Date of Birth</label>
            <input
              className='input'
              name={'dateOfBirth'}
              type='date'
              value={state.formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Sex</label>
            {/* <input
              className="input"
              placeholder="Gender"
              name={"gender"}
              type="text"
              value={state.formData.gender}
              onChange={handleChange}
            /> */}
            <div className='control'>
              <div className='select'>
                <select>
                  <option value={state.formData.gender}>Select</option>
                  <option value={state.formData.gender}>Male</option>
                  <option value={state.formData.gender}>Female</option>
                  <option value={state.formData.gender}>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div id='submit-button'>
            <input
              className='button is-large is-danger'
              type='submit'
              value='Register'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
