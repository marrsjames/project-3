import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../api/auth.js'
import { setToken } from '../../api/token.js'


const Login = ({ callback }) => {
  const history = useHistory();
  const [state, setState] = React.useState({
    formData: {
      username: '',
      password: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      if ((res.status === 200) | (res.status === 202)) {
        setToken(res.data.token);
        callback();
        history.push("/appointments");
      }
    } catch (err) {
      console.error('Error logging in user', err)
    }
  };


  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }

    setState({ formData })
  }

  return (
    <div className='section'>
      <h1 className='title has-text-centered'>Login Form</h1>
      <div id='login-form'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Username</label>
            <input
              className='input'
              placeholder='Username'
              name={'username'}
              value={state.formData.username}
              onChange={handleChange}
            />
          </div>

          <div id='password'>
            <label className='label'>Password</label>
            <input
              className='input'
              placeholder='Password'
              name='password'
              type='password'
              value={state.formData.password}
              onChange={handleChange}
            />
          </div>

          <div id='submit-button'>
            <input
              className='button is-large is-danger'
              type='submit'
              value='Login'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
