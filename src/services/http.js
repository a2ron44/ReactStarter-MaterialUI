import axios from "axios";

//axios.defaults.baseURL = process.env.REACT_APP_CG_API;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.error(error);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

const exportProps = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default exportProps;
