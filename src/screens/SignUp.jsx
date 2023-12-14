import React from 'react'
import { useEffect, useState } from 'react'
import { signUp } from '../services/users'
import { Link , useNavigate } from 'react-router-dom'
import { createUserProfile } from '../services/user_profiles'

const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    profile_pic_url: '',
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
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    let creds = {
      username:form.username,
      password:form.password
    }
    try {
      const user = await signUp(creds);
      setUser(user)
      navigate('/feed');
    } catch (error) {
      console.error(error);
      setForm({
        profile_pic_url: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError.length ? 'danger' : ''
    if (form.isError.length > 0) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800">Sign Up</button>
    }
  }

  const { profile_pic_url, username, email, password, passwordConfirmation } = form

  return (
    <div className="relative h-screen">
    <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-full bg-cover bg-center brightness-75" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619583314978-ec70ebeb3a7c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    <section className="">
          <div className="flex flex-col w-96 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="relative mb-6">
              <div className="">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center relative">
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 backdrop-blur bg-black/20">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSignUp}>
                <div className='m-10'>
                <label htmlFor="profile_pic_url" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="img"
                      name="profile_pic_url"
                      value={profile_pic_url}
                      placeholder="Add Profile image"
                      className="bg-gray-50 border  text-center mt h-44 w-44 border-gray-300 text-white sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      className="bg-gray-50 border text-center border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      className="bg-gray-50 border text-center border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-white text-center sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      placeholder="Confirm Password"
                      className="bg-gray-50 border border-gray-300 text-white text-center sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  {renderError()}
                  {/* <button
                    type="submit"
                    className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Sign Up
                  </button> */}
                  <p className="text-sm font-semibold text-center text-white">
                    Have an account? <a href="#" className="font-extrabold hover:underline dark:text-white"  ><Link to="/sign-in">Sign In</Link></a>
                  </p>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
};

export default SignUp