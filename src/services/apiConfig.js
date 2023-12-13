import axios from "axios";

// const getToken = () => {
//   return new Promise((resolve) => {
//     resolve(`Bearer ${localStorage.getItem("token") || null}`);
//   });
// };

const getToken = () => {
  return new Promise((resolve) => {
    const token = localStorage.getItem("token");
    resolve(token ? `Bearer ${token}` : null);
  });
};

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://munchmeet-api-904c970ee4a3.herokuapp.com/api/"
      : "https://munchmeet-api-904c970ee4a3.herokuapp.com/api/",
      //http://127.0.0.1:8000/api/
});

// api.interceptors.request.use(
//   async function (config) {
//     config.headers["Authorization"] = await getToken();
//     return config;
//   },
//   function (error) {
//     console.log("Request error: ", error);
//     return Promise.reject(error);
//   }
// );
api.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;