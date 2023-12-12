import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Slider from 'react-slick';
import { signIn } from '../services/users.js'
import { useNavigate } from 'react-router-dom';
const SignIn = ({setUser, setProfile}) => {
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
      <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-full">
        <section className="z-10">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
              Munch Meet
            </a>
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
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
                  <Link to={'/feed'}> 
                  <button
                    type="button"
                    className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Nosey?
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;

{/* <Slider {...settings} className="absolute top-0 left-0 w-full h-ful">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider> */}