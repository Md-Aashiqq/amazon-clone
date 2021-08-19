import Axios from "axios";
import { toast } from "react-toastify";
// axios config setup

const baseURL = process.env.REACT_APP_BACKEND_URL;
let token;
const apiConfig = {
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

if (localStorage.getItem("token")) {
  token = localStorage?.getItem("token");
}

const protectedApiConfig = {
  baseURL: baseURL,
};

// axios initilize with config provided
export const API = Axios.create(apiConfig);
export const protectedAPI = Axios.create(protectedApiConfig);

// protected api interceptor
API.interceptors.request.use(
  (res) => res,
  (err) => {
    console.log(err);
    throw new Error(err.response.data.message);
  }
);

API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err.response.data);
    if (err.response.data.msg === "User Not found") {
      toast.dark("User Not Found");
    }
    if (err.response.data.msg === "password wrong") {
      toast.dark("Please Check Your email and password");
    }
    if (err.response.status === 401) {
      toast.dark("User Already Exixts");
    }
    throw new Error(err.response.data.message);
  }
);
