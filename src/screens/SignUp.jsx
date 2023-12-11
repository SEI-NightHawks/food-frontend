import { useState } from 'react'
import { signUp } from '../services/users'
import { Link , useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
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
      return <button type='submit' className='bg-red-500'>Sign Up</button>
    }
  }

  const { username, password, passwordConfirmation } = form

  return (
    <div className='main-div'>
    <div className='form-container'>
      <h3 id="header">Sign Up</h3>
      <form onSubmit={onSignUp}>
      <label className="prompt">USERNAME</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
          className='input'
        />
  
                <label className="prompt">PASSWORD</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
          className='input'
        />
        <label className="prompt">PASSWORD CONFIRMATION</label>
        <input
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
          className='input'

        />
        {renderError()}
      </form>
      <Link to={"/"}>
          <button className="bg-red-500">SIGN IN</button>
        </Link>
    </div>
    </div>
  )
}
export default SignUp