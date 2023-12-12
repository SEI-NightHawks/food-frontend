import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/posts.js';

function CreatePost({user}) {
    const [post, setPost] = useState({
        image_url: "",
        location: "",
        details: "",
        user_profile: user
    })

    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        await createPost(post)
        console.log(post)
        navigate("/feed")
    }

    function handleChange(e) {
        const { name, value } = e.target

        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }))
    }

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="flex items-center justify-center min-h-screen">
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 bg-gray-200 rounded-lg sm:p-8">
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="img"
                      name="image_url"
                      value={post.image_url}
                      placeholder="Food image_url"
                      className="bg-gray-50 border text-center h-52 border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-white dark:text-white"></label>
                    <input
                      type="text"
                      name="location"
                      value={post.location}
                      maxLength="255"
                      className="bg-gray-50 border text-center border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Location"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="details" className="block mb-2 text-sm text-red-500 font-semibold text-center">How was the Food?</label>
                    <textarea
                      name="details"
                      value={post.details}
                      maxLength="255"
                      className="bg-gray-50 border text-center border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your feedback (max 250 characters)"
                      required=""
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreatePost;