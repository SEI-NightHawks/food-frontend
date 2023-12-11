import React from "react";
import { useEffect, useState } from "react";
// import Slider from 'react-slick';
import { signIn } from '../services/users.js'
import { Link, useNavigate } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//   'https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=3090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// ];

// const settings = {
//   autoplay: true,
//   onChange: function noRefCheck() {},
//   onStartChange: function noRefCheck() {},
//   duration: 20000,
//   arrows: false,
//   lazyLoad: true,
//   cssEase: 'linear',
// };

const SignIn = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async event => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/feed");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError.length > 0 ? "danger" : "";
    if (form.isError.length > 0) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (<button type="submit" className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800">Sign In</button>)
    }
  };

  const { username, password } = form

  return (
    <div className="relative h-screen">
      <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <section className="z-10">
          <div className="flex flex-col items-center justify-center  bg-gray-800 px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
              Munch Meet
            </a>
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 backdrop-blur space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSignIn}>
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
                  {renderError()}
                  <p className="text-sm font-medium text-white">
                    Don't have an account yet? <a href="#" className="font-extrabold hover:underline dark:text-white">Sign up</a>
                  </p>
                  <button
                    type="button"
                    className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    <Link to="/feed">Nosey?</Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
