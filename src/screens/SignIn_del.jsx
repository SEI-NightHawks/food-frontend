import { useState } from 'react'
import { signIn } from '../services/users.js'
import { useNavigate } from 'react-router-dom'
// import "../css/SignIn.css"

const SignIn = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    console.log(props)
    try {
      const user = await signIn(form)
      setUser(user)
      console.log(user)
      navigate('/feed')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button classname="bg-red-500" type='submit'>SIGN IN</button>
    }
  }

  const { username, password } = form

  return (
    <div className='main-div'>
    <div className='form-container'>
      <h3 id="header">Sign In</h3>
      <form onSubmit={onSignIn}>
        <label className="prompt">username</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
          className='input'
        />
        <label className="prompt">Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
          className='input'
        />
        {renderError}
      </form>
    </div>
    </div>
  )
}

export default SignIn