import { useState }from 'react';
import Slider from 'react-slick';
//import signup from users in the services folder
import { NavLink, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://blog.resy.com/wp-content/uploads/2020/03/Wye-Hill-2000x1125.jpeg',
  'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.self.com/photos/5dcaf666e194ae0009e68943/4:3/w_960,c_limit/AdobeStock_141907357.jpeg',
];

const settings = {
  autoplay: true,
  onChange: function noRefCheck() {},
  onStartChange: function noRefCheck() {},
  duration: 20000,
  arrows: false,
  lazyLoad: true,
  cssEase: 'linear',
};

const SignUp = props => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = event =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async event => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings} className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 w-full h-full flex items-center bjustify-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
          <div className="relative mb-6">
            <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-white">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center relative">
                <span className="text-6xl text-gray-800 absolute bottom-1 right-5">+</span>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 backdrop-blur space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSignUp}>
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="text"
                      name="username"
                      id="username"
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
                      value={pasword}
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-white text-center sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordConfirmation}
                      placeholder="Confirm Password"
                      className="bg-gray-50 border border-gray-300 text-white text-center sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Sign Up
                </button>
                <p className="text-sm font-semibold text-white">
                  Have an account? <NavLink to= "/"> <a href="#" className="font-extrabold hover:underline dark:text-white">Sign In</a></NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
